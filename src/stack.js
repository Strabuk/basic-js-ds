const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.numberOfPeep = 0;
    this.Array = [];
  }
  push(el) {
    this.Array.push(el);
  }
  pop() {
    this.numberOfPeep = this.Array.pop();
    return this.numberOfPeep;
  }
  peek() {
    this.numberOfPeep = this.Array[this.Array.length-1];
    return this.numberOfPeep;
  }
}

module.exports = {
  Stack
};
