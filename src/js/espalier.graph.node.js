export default class GraphNode {
    constructor(args) {
        if (this.constructor === GraphNode) {
           throw new TypeError("Abstract class GraphNode cannot be instantiated.");
         }

        if (typeof this.isValid !== "function") {
            throw new TypeError("GraphNode derivations must implment isValid()")
        }

        if (typeof this.renderIn !== "function") {
            throw new TypeError("GraphNode derivations must implement renderIn(container, result, steps)");
        }
    }
}