const isNight = str => str.slice(-2,-1).toUpperCase() === 'P';

function timeConversion(s) {
    // Write your code here
    const arr = s.slice(0,8).split(':');
    arr[0] = (isNight(s)) ?
        (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
        (arr[0] == 12 ? '00' : arr[0]);
    return arr.join(':');
}
