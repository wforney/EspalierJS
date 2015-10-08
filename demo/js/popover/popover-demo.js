import espalier from "../../../src/js/espalier";
import popoverTemplate from "./templates/popover-template";

export default function (parentElement) {
	let position = "bottom"
	if(parentElement.hasAttribute("data-popover-direction")){
		position = parentElement.getAttribute("data-popover-direction");
	}
	espalier.popover({
        element: popoverTemplate(),
		parent: parentElement,
		position: position
    });
}