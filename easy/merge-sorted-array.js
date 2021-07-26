/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointer = 0;
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[pointer];
        pointer++;
    }

    return nums1.sort((a, b) => a - b);
};

// Add numbers after the length of the num1
// then sort the array
// Time complexity would be O(n)
