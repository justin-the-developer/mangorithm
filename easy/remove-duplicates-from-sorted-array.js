/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    let i = 0;
    let j = 1;
    while(j < nums.length){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
            j++;
        } else {
            j++;
        };
    }
    return i+1;

};

//Since it is sorted array, you only need to check your next element whether the same.
//if it's not, move your index then set your element to your next element.
//if it is duplicated one, move your next index.

//Time complexity is O(n) because we are iterating all the elements in the array.
