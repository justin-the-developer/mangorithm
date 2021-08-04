/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    const map= new Map();
    let i =0;
    for(let j=0; j< s.length; j++) {
        i = Math.max(i, (map.get(s.charAt(j)) ?? -1) +1);
        longest = Math.max(longest, j-i+1);
        map.set(s.charAt(j),j);
    }
    return longest;
};

//you can set your string in key and value pair, then seach wether it has the current character value or not
//if it returns value, it will return the current index, if not, will return -1
//you can get the longest number from current index to the next character
