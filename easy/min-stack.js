/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = [];
    this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    //when we push to this array, we should check whether the value is lowest value to find minimum value faster.
    if (this.min.length === 0 || val <= this.min[this.min.length - 1]) this.min.push(val);
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var val = this.stack.pop();
    if (val === this.min[this.min.length - 1]) this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1] : 0;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min.length ? this.min[this.min.length - 1] : 0;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

