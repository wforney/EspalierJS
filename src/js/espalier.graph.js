import core from "./espalier.core";

let keys = {
    container: new Object(),
    result: new Object(),
    currentStep: new Object(),
    steps: new Object(),
    transversed: new Object()
}

class Graph {
    constructor(args) {
        this._internals = new WeakMap();

        if (!args.container.nodeName) {
            //NOTE: This is probably a jQuery selection array.
            args.container = args.container[0];
        }

        this._internals.set(keys.container, args.container);
        this._internals.set(keys.result, core.extend(args.default, {}));
        this._internals.set(keys.currentStep, args.head);
        this._internals.set(keys.steps, args.steps);
        this._internals.set(keys.transversed, []);

        for (let step of args.steps) {
            step.cssClass = "graph-step-not-started";
            step.disabled = true;
            step.status = "Not started";
        }

        args.steps[0].cssClass = "graph-step-in-progress";
        args.steps[0].disabled = false;
        args.steps[0].status = "In progress";

        this._internals.get(keys.currentStep).renderIn(this._internals.get(keys.container), this._internals.get(keys.result), args.steps);

        core.addEventListener(this._internals.get(keys.container), "click", (e) => {
            let event = e.target.getAttribute("data-graph-event");

            switch (event) {
                case "next":
                    this.next();
                    return;
                case "back":
                    this.previous();
                    return;
            }
        })
    }

    goto(index) {
        throw new Error("not implemented yet...");
        //         let transversed = this._internals.get(keys.transversed);
        // 
        //         if (index === this.currentIndex) {
        //             return;
        //         }
        // 
        //         if (index > this.currentIndex) {
        //             throw new Error("Use the next method to move forward in the wizard.");
        //         }
        // 
        //         for (let i = this.currentIndex; i >= index; i--) {
        //             
        //         }
        // 
        //         this.currentIndex = index;
        //         this.steps[this.currentIndex].renderIn(this._internals.get("container"), this._internals.get(keys.result));
    }

    next() {
        let step = this._internals.get(keys.currentStep);
        let value = step.getValue();

        if (value === undefined) {
            return;
        }

        let transversed = this._internals.get(keys.transversed);
        core.setProperty(this._internals.get(keys.result), step.propertyName, value);
        let nextStep = step.next();
        transversed.push(step);
        this._internals.set(keys.currentStep, nextStep);

        let steps = this._internals.get(keys.steps)
        let lastStepIndex = step.stepIndex;
        let newStepIndex = nextStep.stepIndex;

        if (lastStepIndex !== newStepIndex) {
            steps[lastStepIndex].cssClass = "graph-step-completed";
            steps[lastStepIndex].status = "Completed";
            steps[newStepIndex].cssClass = "graph-step-in-progress";
            steps[newStepIndex].disabled = false;
            steps[newStepIndex].status = "In progress";
        }

        nextStep.renderIn(this._internals.get(keys.container), this._internals.get(keys.result), steps);
    }

    previous() {
        let transversed = this._internals.get(keys.transversed);
        let lastNode = transversed.pop();
        let currentNode = this._internals.get(keys.currentStep);
        core.setProperty(this._internals.get(keys.result), currentNode.propertyName, null);
        this._internals.set(keys.currentStep, lastNode);

        let steps = this._internals.get(keys.steps)
        let lastStepIndex = currentNode.stepIndex;
        let newStepIndex = lastNode.stepIndex;

        if (lastStepIndex !== newStepIndex) {
            steps[lastStepIndex].cssClass = "graph-step-not-started";
            steps[lastStepIndex].disabled = true;
            steps[lastStepIndex].status = "Not started";
            steps[newStepIndex].cssClass = "graph-step-in-progress";
            steps[newStepIndex].status = "In progress";
        }

        lastNode.renderIn(this._internals.get(keys.container), this._internals.get(keys.result), steps);
    }
}

export default function (args) {
    return new Graph(args);
}