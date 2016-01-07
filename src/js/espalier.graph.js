import core from "./espalier.core";
import singleOrError from "./helpers/single-or-error";

let internals = new WeakMap();

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

let render = (graph) => {
    let graphInternals = internals.get(graph);

    if (graphInternals.node.getTitle) {
        for (let step of graphInternals.steps) {
            step.cssClass = "graph-step-completed";
            step.status = "Completed";
        }

        let titleInfo = graphInternals.node.getTitle();

        if (titleInfo) {
            graphInternals.steps.push({
                cssClass: "graph-step-in-progress",
                status: "In progress",
                title: titleInfo.title,
                key: titleInfo.key,
                node: graphInternals.node
            });

            graphInternals.knownTitleKeys.add(titleInfo.key);
        }
    }

    let currentEvent = graphInternals.nodeSubsciption;

    if (currentEvent) {
        core.unsubscribe(currentEvent);
    }

    graphInternals.nodeSubsciption = core.subscribe(graphInternals.node, (graphEvent) => {
        handleNavigation(graph, graphEvent, -1);
    });

    graphInternals.node.renderIn(graphInternals.container, graphInternals.result, graphInternals.steps)
        .then(() => {
            let valueChanged = graphInternals.onValueChanged;

            if (valueChanged) {
                valueChanged(graphInternals.result);
            }
        });
}

export default class Graph {
    constructor(args) {
        let graphInternals = {
            node: args.head,
            container: singleOrError(args.container),
            transversed: [],
            knownTitleKeys: new Set(),
            result: core.extend(args.default, {}),
            onValueChanged: args.valueChanged,
            steps: []
        };

        internals.set(this, graphInternals);
        render(this);

        core.addEventListener(graphInternals.container, "click", (e) => {
            let target = e.target;

            while (target && target != graphInternals.container) {
                let event = target.getAttribute("data-graph-event");
                handleNavigation(this, event, target.getAttribute("data-title-key"));
                target = target.parentNode;
            }
        });
    }

    goto(key) {
        let graphInternals = internals.get(this);

        if (!graphInternals.knownTitleKeys.has(key)) {
            throw new Error("Unknown title key.");
        }

        while (!graphInternals.node.getTitle || !graphInternals.node.getTitle() || graphInternals.node.getTitle().key !== key) {
            if (graphInternals.node.getTitle) {
                let titleInfo = graphInternals.node.getTitle();

                if (titleInfo) {
                    graphInternals.steps.pop();
                    graphInternals.knownTitleKeys.delete(titleInfo.key);
                }
            }

            if (graphInternals.node.getPropertyName) {
                delete graphInternals.result[graphInternals.node.getPropertyName()];
            }

            graphInternals.node = graphInternals.transversed.pop();
        }

        graphInternals.steps.pop();

        if (graphInternals.node.getPropertyName) {
            delete graphInternals.result[graphInternals.node.getPropertyName()];
        }

        render(this);
    }

    next() {
        let graphInternals = internals.get(this);
        let step = graphInternals.node;

        if (!step.isValid()) {
            return;
        }

        let nextStep = step.next();

        if (nextStep.getTitle && graphInternals.knownTitleKeys.has(nextStep.getTitle().key)) {
            throw new Error("A node with that title key has already been seen.");
        }

        graphInternals.transversed.push(step);

        if (step.getPropertyName) {
            let value = step.getValue();
            core.setProperty(graphInternals.result, step.getPropertyName(), value);
        }

        graphInternals.node = nextStep;
        render(this);
    }

    previous() {
        let graphInternals = internals.get(this);

        if (graphInternals.node.back) {
            graphInternals.node.back();
        }

        if (graphInternals.node.getTitle) {
            let title = graphInternals.node.getTitle();

            if (title) {
                graphInternals.steps.pop();
                graphInternals.knownTitleKeys.delete(title.key);
            }
        }

        graphInternals.node = graphInternals.transversed.pop();

        if (graphInternals.node.getTitle) {
            let title = graphInternals.node.getTitle();

            if (title) {
                graphInternals.steps.pop();
            }
        } else {
            let stepTitle = graphInternals.steps[graphInternals.steps.length - 1];
            stepTitle.cssClass = "graph-step-in-progress";
            stepTitle.status = "In progress";
        }

        if (graphInternals.node.getPropertyName) {
            delete graphInternals.result[graphInternals.node.getPropertyName()];
        }

        render(this);
    }

    destroy() {
        let currentEvent = internals.get(this).nodeSubsciption;

        if (currentEvent) {
            core.unsubscribe(currentEvent);
        }
    }
}