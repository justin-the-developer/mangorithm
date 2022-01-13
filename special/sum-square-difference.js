let array = new Array(100).fill(0).map((e, i) => i + 1);

function findSumOfSquares(array){
    return array.reduce((acc, cur) => {
        if(cur) return acc + (cur * cur)
        return acc;
    },0);
    return answer;
}

function findSquareofSum(array){
    return array.reduce((acc, cur) => {
        if(cur) return acc + cur;
        return acc;
    })
    return answer * answer;
}

console.log(findSquareofSum(array) - findSumOfSquares(array));
