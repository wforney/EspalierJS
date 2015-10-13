import Graph from "../../../src/js/espalier.graph";
import GraphNode from "../../../src/js/espalier.graph.node";
import EspalierNode from "../../../src/js/espalier.domnode";
import common from "../../../src/js/espalier.common";

let nextKey = new Object();

let getStepContent = (stepId, stepText, hasNext, hasBack) => {
    let stepContent = `<h3 id="${stepId}">${stepText}</h3>`;

    if (hasBack) {
        stepContent += `<a data-graph-event='back' href='javascript: void(0);' class='btn btn-primary'>Back</a> `
    }

    if (hasNext) {
        stepContent += `<a data-graph-event="next" href="javascript: void(0);" class="btn btn-primary">Next</a>`;
    }

    return stepContent;
};

class Step1 extends GraphNode {
    constructor() {
        super();
        this._internals = new WeakMap();
    }

    isValid() {
        return true;
    }

    getValue() {
        return "This is step 1";
    }

    renderIn(container, result, steps) {
        container.innerHTML = getStepContent("step-1", this.getValue(), true, false);
    }

    next() {
        if (!this._internals.has(nextKey)) {
            this._internals.set(nextKey, new Step2dot1());
        }

        return this._internals.get(nextKey);
    }

    getPropertyName() {
        return "StepOne";
    }

    getStepIndex() {
        return 0;
    }
}

class Step2dot1 extends GraphNode {
    constructor() {
        super();
    }
}

class Step2dot2 extends GraphNode {
    constructor() {
        super();
    }
}

class Step3 extends GraphNode {
    constructor() {
        super();
    }
}

export default function () {
    describe("graph", () => {
        let graphInstance;
        let container;

        it("throws an error when no container is specified in the arguments.", function () {
            expect(() => { new Graph({}); }).toThrowError("This was not a single node.");
        });
		
        //TODO: Make sure head is passed in.
        //TODO: Make sure steps are specified, or, perhaps, allow them to not specify steps?

        beforeEach(() => {
            container = new EspalierNode("<div id='test-graph'></div>");
            graphInstance = new Graph({
                container: container.getNode(),
                head: new Step1(),
                steps: [
                    { title: "Step 1" },
                    { title: "Step 2" },
                    { title: "Step 3" }
                ]
            })
        });

        it("has rendered the first step successfully", function () {
            let foundH3 = common.find("h3", container.getNode());
            expect(foundH3.length).toBe(1);
            expect(foundH3[0].id).toBe("step-1");
        });

        it("should make 1 equal to 2", function () {
            expect(1).toBe(2);
        });
    });
};