import espalier from "../../espalier";
import Step1 from "./graphNodes";

export default class DemoGraph extends espalier.Graph {
    constructor(container, valueChanged) {
        super({
            container,
            default: {},
            head: new Step1(),
            steps: [
                {
                    title: "Step 1"
                },
                {
                    title: "Step 2"
                },
                {
                    title: "Step 3"
                }
            ],
            valueChanged
        });
    }
}