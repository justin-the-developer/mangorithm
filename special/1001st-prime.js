function isPrime(num) {
    if (num <= 1) return false;
    if (num % 2 == 0 && num > 2) return false;
    const s = Math.sqrt(num);
    for(let i = 3; i <= s; i += 2) {
        if(num % i === 0) return false;
    }
    return true;
}

function findPrimeNumberOnTarget(target) {
    let results = {};
    let number = 2;
    let count = 0;
    while(!results[target]){
        if(isPrime(number)){
            count++;
            results[count] = number;
        }
        number++;
    }
    return results[target];
}

console.log(findPrimeNumberOnTarget(6));
