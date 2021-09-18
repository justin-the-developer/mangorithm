function miniMaxSum(arr) {
    // Write your code here
    arr.sort();

    const sum = arr.reduce((a, total) => a + total, 0);
    console.log(sum - arr[arr.length - 1], sum - arr[0]);
}
