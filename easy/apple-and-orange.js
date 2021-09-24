/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleInsider = apples.filter(e => {
        if((e + a) >= s && (e + a) <= t) return e;

        return ''
    })

    let orangeInsider = oranges.filter(e => {
        if((e + b) >= s && (e + b) <= t) return e;

        return ''
    })


    return [appleInsider.length, orangeInsider.length].join("\n");
}
