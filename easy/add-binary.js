/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

//first trial
var addBinary = function(a, b) {

    return (parseInt(a, 2) + parseInt(b, 2).toString(2);
};

//-> fail.
//Input:
// "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// Output:
// "110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000"
// Expected:
// "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"

// when it's big int comes into a variable it gets error.

//second trial

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (BigInt('0b'+a) + BigInt('0b'+b)).toString(2);
};

//Bigint covers bigger int, it also covers binary int; starts with 0b-> binary.
