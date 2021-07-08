/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastIndex = digits.length - 1;
    let value = 0;
    let carry = 1;

    while (lastIndex >= 0 && carry) {
        value = digits[lastIndex] + carry;
        carry = Math.floor(value / 10);
        digits[lastIndex] = value % 10;
        lastIndex--;
    }

    if (carry) digits.unshift(carry);

    return digits;
};

//While will go through till the elements of the array, the time complexity is O(n).
