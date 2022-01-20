function findFactors(num) {
    let factors = [];

    for(let i = 1; i <= num; i++){
        if(num % i === 0) {
            factors.push(i);
        }
    }

    return factors.sort((a,b)=> a-b);
}

function findTriagularNumberOn(n){
    let count = 1;
    let tNum;

    while(findFactors(tNum).length < n){
        tNum = count * (count + 1) / 2;
        count++;
    }
    return triangleNum;
}
