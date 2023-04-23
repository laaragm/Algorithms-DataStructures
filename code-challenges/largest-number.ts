// Given a string that has lowercase letters and numbers
// Compare the number groupings and print the largest number
export function getLargestNumber(str: string): number | null {
    const regexExpr = /\d+/g;
    const matches = str.match(regexExpr);
    if (matches) {
        return findMax(matches);
    }

    return null;
}

function findMax(values: string[]): number {
    let max = 0;
    for (let i = 0; i < values.length; i++) {
        if (+values[i] > max) {
            max = +values[i];
        }
    }

    return max;
}
