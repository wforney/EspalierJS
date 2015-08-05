import core from "./espalier.core";
import common from "./espalier.common";

let keys = {
    container: new Object(),
    result: new Object(),
    currentStep: new Object(),
    steps: new Object(),
    transversed: new Object(),
    indexHeadNodes: new Object(),
    valueChanged: new Object(),
    nodeSubsciption: new Object()
}

let handleNavigation = function (graph, graphEvent, index) {
    switch (graphEvent) {
        case "next":
            graph.next();
            return;
        case "back":
            graph.previous();
            return;
        case "goto":
            graph.goto(index);
            return;
    }
};

let setStepStates = (graph) => {
    let headNodes = graph._internals.get(keys.indexHeadNodes);
    let node = graph._internals.get(keys.currentStep);
    let currentIndex = node.stepIndex;
    let steps = graph._internals.get(keys.steps);

    for (let i = 0; i < steps.length; i++) {
        steps[i].disabled = false;

        if (i < currentIndex) {
            steps[i].cssClass = "graph-step-completed";
            steps[i].status = "Completed";
            continue;
        }

        if (i === currentIndex) {
            steps[i].cssClass = "graph-step-in-progress";
            steps[i].status = "In progress";
            continue;
        }

        if (i > currentIndex) {
            steps[i].cssClass = "graph-step-not-started";
            steps[i].disabled = true;
            steps[i].status = "Not started";
            headNodes.set(i, false);
        }
    }

    if (!headNodes.get(currentIndex)) {
        headNodes.set(currentIndex, node);
    }

    let currentEvent = graph._internals.get(keys.nodeSubsciption);

    if (currentEvent) {
        core.unsubscribe(currentEvent);
    }

    graph._internals.set(keys.nodeSubsciption, core.subscribe(node, (graphEvent) => {
        handleNavigation(graph, graphEvent, -1);
    }));

    node.renderIn(graph._internals.get(keys.container), graph._internals.get(keys.result), steps);

    let valueChanged = graph._internals.get(keys.valueChanged);

    if (valueChanged) {
        valueChanged(graph._internals.get(keys.result));
    }
}

export default class Graph {
    constructor(args) {
        this._internals = new WeakMap();
        args.container = common.singleOrError(args.container);
        let headNodes = new Map();

        this._internals.set(keys.container, args.container);
        this._internals.set(keys.result, core.extend(args.default, {}));
        this._internals.set(keys.currentStep, args.head);
        this._internals.set(keys.steps, args.steps);
        this._internals.set(keys.valueChanged, args.valueChanged);
        this._internals.set(keys.transversed, []);
        this._internals.set(keys.indexHeadNodes, headNodes);

        for (let i = 0; i < args.steps.length; i++) {
            args.steps[i].index = i;
            headNodes.set(i, false);
        }

        headNodes.set(0, args.head);
        this.goto(0);

        core.addEventListener(this._internals.get(keys.container), "click", (e) => {
            let target = e.target;

            while (target && target != args.container) {
                let event = target.getAttribute("data-graph-event");
                handleNavigation(this, event, Number(target.getAttribute("data-graph-index")));
                target = target.parentNode;
            }
        })
    }

    goto(index) {
        let headNodes = this._internals.get(keys.indexHeadNodes);
        let nodeToGoTo = headNodes.get(index);
        let transversed = this._internals.get(keys.transversed);
        let result = this._internals.get(keys.result);

        if (transversed.length > 0) {
            let poppedNode;

            do {
                poppedNode = transversed.pop();
                delete result[poppedNode.propertyName];
            } while (poppedNode !== nodeToGoTo);
        }

        this._internals.set(keys.currentStep, nodeToGoTo);
        setStepStates(this);
    }

    next() {
        let step = this._internals.get(keys.currentStep);

        if (!step.isValid()) {
            return;
        }

        let nextStep = step.next();

        if (step.stepIndex > nextStep.stepIndex) {
            throw new Error("Invalid step index. It must be equal to or greater than the last step's index.")
        }

        let transversed = this._internals.get(keys.transversed);
        transversed.push(step);

        if (step.propertyName) {
            let value = step.getValue();
            core.setProperty(this._internals.get(keys.result), step.propertyName, value);
        }

        this._internals.set(keys.currentStep, nextStep);
        setStepStates(this);
    }

    previous() {
        let currentNode = this._internals.get(keys.currentStep);

        if (currentNode.back) {
            currentNode.back();
        }

        let transversed = this._internals.get(keys.transversed);
        let lastNode = transversed.pop();

        delete this._internals.get(keys.result)[lastNode.propertyName];
        this._internals.set(keys.currentStep, lastNode);
        setStepStates(this);
    }
}