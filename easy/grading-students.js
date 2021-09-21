const differencesFromFive = (num) => {
    let counter = 0;
    while(num % 5 !== 0) {
        num++;
        counter++;
    }
    return counter;
}

function gradingStudents(grades) {
    //Write your code here
    return grades.map(e => {
        let difference = differencesFromFive(e);
        let finalGrade = difference + e;

        if((difference < 3) && (finalGrade >= 40)) {
            return finalGrade;
        }else {
            return e;
        }
    })
}
