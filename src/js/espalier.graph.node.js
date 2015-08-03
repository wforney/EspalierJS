export default class GraphNode {
    constructor(args) {
        if (this.constructor === GraphNode) {
            throw new TypeError("Abstract class GraphNode cannot be instantiated.");
        }

        if (this.getValue === undefined) {
            throw new TypeError("GraphNode derivations must implment getValue()")
        }

        if (this.renderIn == undefined) {
            throw new TypeError("GraphNode derivations must implement renderIn(container, result, steps)");
        }

        if (this.propertyName == undefined) {
            throw new TypeError("GraphNode derivations must define a propertyName that will be set with it's value.")
        }

        if (this.next == undefined) {
            throw new TypeError("GraphNode derivations must implement a method next() that returns the next node in the graph.")
        }
    }
}