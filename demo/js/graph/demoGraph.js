import espalier from "../../../src/js/espalier";
import Step1 from "./graphNodes";

export default class DemoGraph extends espalier.Graph {
    constructor(container, valueChanged) {
        super({
            container,
            default: {},
            head: new Step1(),
            valueChanged
        });
    }
}