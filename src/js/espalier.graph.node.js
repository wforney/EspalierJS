export default class GraphNode {
    constructor(args) {
        if (this.constructor === GraphNode) {
           throw new TypeError("Abstract class GraphNode cannot be instantiated.");
         }

        if (this.isValid === undefined) {
            throw new TypeError("GraphNode derivations must implment isValid()")
        }

        if (this.renderIn == undefined) {
            throw new TypeError("GraphNode derivations must implement renderIn(container, result, steps)");
        }
    }
}