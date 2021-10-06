function breakingRecords(scores) {
    // Write your code here
    let highest = scores[0];
    let lowest = scores[0];
    let countForHighBreaks = 0;
    let countForLowBreaks = 0;

    for(let i = 1; i < scores.length; i++){
        if(highest < scores[i]){
            highest = scores[i];
            countForHighBreaks++;
        }

        if(lowest > scores[i]){
            lowest = scores[i];
            countForLowBreaks++;
        }
    }

    return [countForHighBreaks, countForLowBreaks];
}
