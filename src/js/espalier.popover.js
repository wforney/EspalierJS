import core from "./espalier.core";
import config from "./config/index";
import common from "./espalier.common";
import EspalierNode from "./espalier.domnode";

let getPosition = function(element){
	var box = element.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
	var height = element.offsetHeight;
	var width = element.offsetWidth;
	var right = box.left + width;
	
    return { 
		top: Math.round(top), 
		left: Math.round(left), 
		right: Math.round(right),
		bottom: Math.round(box.bottom),
		height:  Math.round(height),
		width: Math.round(width),
		relativeXMiddle: Math.round(width/2),
		relativeYMiddle: Math.round(height/2)
		};
}

let reposition = function(obj){
		let parentNode = obj.settings.parent.getNode();
		let elementNode = obj.settings.element.getNode();
		
		let parentPos = getPosition(parentNode);
		let elementPos = getPosition(elementNode);	
		let pos = obj.settings.position;	
				
		let x= 0;
		let y = 0;
		switch (pos){
			case "top":
				if(elementPos.width > parentPos.width){
					x =	parentPos.left - (elementPos.relativeXMiddle - parentPos.relativeXMiddle);
				} else {
					x =	parentPos.left + (parentPos.relativeXMiddle - elementPos.relativeXMiddle);
				}
				x = x < 0 ? 0: x;	
				
				y = parentPos.top - elementPos.height;
				y = y < 0 ? 0 : y;
				
				break;
			case "bottom":
				if(elementPos.width > parentPos.width){
					x =	parentPos.left - (elementPos.relativeXMiddle - parentPos.relativeXMiddle);
				} else {
					x =	parentPos.left + (parentPos.relativeXMiddle - elementPos.relativeXMiddle);
				}
				x = x < 0 ? 0: x;	
				
				y = parentPos.top + parentPos.height;
				y = y < 0 ? 0 : y;
				
				break;
			case "left":
				x = parentPos.left - elementPos.width;
				x = x < 0 ? parentPos.right: x;	
				
				y =	parentPos.top;
				y = y < 0 ? 0 : y;		
				break;
			case "right":
				x = parentPos.right;
				
				y =	parentPos.top;
				y = y < 0 ? 0 : y;	
				break;
		}
		
		
		elementNode.style.top = y + "px";
		elementNode.style.left = x + "px";
		
};

function isDescendant(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}

class Popover {
	constructor(args){
		this.settings = {
			element: undefined,
			position: undefined,
			parent: undefined,
			hideListener: undefined
		};
		common.extend(this.settings, args);
		
		if(!this.settings.element){
			throw new Error("You must pass an element.");
		}
		
		if(!this.settings.parent){
			throw new Error("You must pass a parent element.");
		}
		this.position = this.position === undefined ? "bottom": this.position;
		this.settings.element = new EspalierNode(this.settings.element);
		this.settings.parent = new EspalierNode(this.settings.parent);
	}
	
	show() {
		core.hideMainMessage();
		let popoverNode = this.settings.element.getNode();
		let parentNode = this.settings.parent.getNode();
		
		this.settings.element.addClass("popover");
		popoverNode.style.position = "absolute";
		common.body.append(popoverNode);
		reposition(this);
		popoverNode.style.display = "none";

		config.showPopoverAnimation(popoverNode);

		//For IE compatibility - a reference to the listener needs to used at removal.
		this.settings.hideListener = core.addEventListener(document, "click", (event) =>{
			debugger;
			let target = event.target;
			let shouldKeep = isDescendant(target, popoverNode)
			if(!shouldKeep && target !== parentNode && target !== popoverNode){
				this.hide();
			}
		});
		
		return this;	
	}
	
	hide(){
		var popover = this.settings.element;
		config.hidePopoverAnimation(popover);
		document.removeEventListener("click", this.settings.hideListener, false);
		return this;	
	}
	
	
	
}

export default function(args){
		return new Popover(args);
}