function birthdayCakeCandles(candles) {
    // Write your code here
    let maxNum = Math.max(...candles);
    let filtered = candles.filter(function(value, index, arr) {
        return value === maxNum;
    });
    return filtered.length;
}
