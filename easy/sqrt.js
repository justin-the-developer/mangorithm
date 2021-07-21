/**
 * @param {number} x
 * @return {number}
 */

//first trial
// var mySqrt = function(x) {
//     return Math.floor(Math.sqrt(x));
// };

//better solution

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return Math.trunc(Math.sqrt(x));
};

// You may use floor to truncate from the decimal point.
// However, trunc has less calculation than floor.
// Using trunc is much faster than floor
