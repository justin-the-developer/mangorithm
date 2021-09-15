/**
 * @param {number} n
 * @return {boolean}
 */
const sum = (n) => {
    let total = 0;
    while(n){
        total += (n % 10) ** 2;
        n = parseInt(n/10);
    }

    return total;
}

var isHappy = function(n) {
    const hashMap = {};
    while(n !== 1 && !hashMap[n]){
        hashMap[n] = true;
        n = sum(n);
    }

    return n === 1;
};
