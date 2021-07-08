/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.trim().split(" ");

    return words.length > 0 ? words[words.length - 1].length : 0;
};

// String.prototype.trim() replace empty string in string
// then split the words by empty string
// find the last index and length of it

// Time complexity is O(n). It is because trim will be called by the length of string.
