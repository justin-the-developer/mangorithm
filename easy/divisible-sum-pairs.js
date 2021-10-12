function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    let focus = ar.shift();

    (ar || []).reduce((target, item) => !((focus + item) % k) && count++, 0);

    return !(ar || []).length ? count : count + divisibleSumPairs(n, k, ar);
}
