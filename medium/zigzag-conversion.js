/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if (numRows == 1) return s;

    let num = numRows - 1;
    let head = num * 2;

    let rows = new Array(numRows).fill('');

    for (let i = 0; i < s.length; ++i) {
        let position = i % head;
        let trail = head - i % head;

        rows[Math.min(position, trail)] += s[i];
        console.log(rows)
    }

    return rows.join('');
};

//key point: find gap between rows!
