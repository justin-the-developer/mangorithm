function migratoryBirds(arr) {
    // Write your code here
    let dict = {}, count = 0, output = [];
    for (let i = 0; i < arr.length; i++) {
        if (dict[arr[i]]) {
            dict[arr[i]] += 1;
        } else {
            dict[arr[i]] = 1;
        }

        if (dict[arr[i]] > count) {
            count = dict[arr[i]];
        }
    }


    for (let j = 0; j < arr.length; j++) {
        if (dict[arr[j]] === count) {
            output.push(arr[j]);
        }
    }

    return Math.min(...output);
}
