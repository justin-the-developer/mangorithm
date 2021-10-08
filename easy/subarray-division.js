function birthday(s,d,m) {
    // Write your code here
    let counter = 0
    const reducer = (cur, pre) => cur + pre

    for(let i=0; i<s.length-m+1; i++){
        if (s.slice(i,i+m).reduce(reducer) == d) counter++
    }

    return counter;
}
