function ReplaceWithPolyfill() {
  const parent = this.parentNode;
  let i = arguments.length;
  let currentNode: HTMLElement;
  if (!parent) { return; }
  if (!i) { // if there are no arguments
    parent.removeChild(this);
  }
  while (i--) { // i-- decrements i and returns the value of i before the decrement
    currentNode = arguments[i];
    if (typeof currentNode !== "object") {
      currentNode = this.ownerDocument.createTextNode(currentNode);
    } else if (currentNode.parentNode) {
      currentNode.parentNode.removeChild(currentNode);
    }
    // the value of "i" below is after the decrement
    if (!i) { // if currentNode is the first argument (currentNode === arguments[0])
      parent.replaceChild(currentNode, this);
    } else { // if currentNode isn't the first
      parent.insertBefore(this.previousSibling, currentNode);
    }
  }
}

export class Polyfills {
  public apply(): void {
    if (!Element.prototype.replaceWith) {
      Element.prototype.replaceWith = ReplaceWithPolyfill;
    }

    if (!CharacterData.prototype.replaceWith) {
      CharacterData.prototype.replaceWith = ReplaceWithPolyfill;
    }

    if (!DocumentType.prototype.replaceWith) {
      DocumentType.prototype.replaceWith = ReplaceWithPolyfill;
    }

    if (Number.parseInt === undefined) {
      Number.parseInt = window["parseInt"];
    }

    if (Number.parseFloat === undefined) {
      Number.parseFloat = window["parseFloat"];
    }

    if (!Element.prototype.remove) {
      Element.prototype.remove = function () {
        this.parentElement.removeChild(this);
      };
    }

    if (!String.prototype.includes) {
      String.prototype.includes = function (search, start) {
        if (typeof start !== "number") {
          start = 0;
        }

        if (start + search.length > this.length) {
          return false;
        } else {
          return this.indexOf(search, start) !== -1;
        }
      };
    }

    if (!Array.prototype.includes) {
      Object.defineProperty(Array.prototype, "includes", {
        value: function (searchElement, fromIndex) {

          // 1. Let O be ? ToObject(this value).
          if (this == null) {
            throw new TypeError("'this' is null or not defined");
          }

          const o = Object(this);

          // 2. Let len be ? ToLength(? Get(O, "length")).
          const len = o.length >>> 0;

          // 3. If len is 0, return false.
          if (len === 0) {
            return false;
          }

          // 4. Let n be ? ToInteger(fromIndex).
          //    (If fromIndex is undefined, this step produces the value 0.)
          const n = fromIndex | 0;

          // 5. If n ≥ 0, then
          //  a. Let k be n.
          // 6. Else n < 0,
          //  a. Let k be len + n.
          //  b. If k < 0, let k be 0.
          let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

          function sameValueZero(x, y) {
            return x === y || (typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y));
          }

          // 7. Repeat, while k < len
          while (k < len) {
            // a. Let elementK be the result of ? Get(O, ! ToString(k)).
            // b. If SameValueZero(searchElement, elementK) is true, return true.
            // c. Increase k by 1. 
            if (sameValueZero(o[k], searchElement)) {
              return true;
            }
            k++;
          }

          // 8. Return false
          return false;
        }
      });
    }
  }
}
