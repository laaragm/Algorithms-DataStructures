// Find out the first recurrent number given an array of numbers

type Items = { [key: number]: number };

function getFirstRepeatedElement(elements: number[]) {
    // Store each element and the frequency it appears
    let map: Items = {};
    let firstRepeatedElement = undefined;
    // Iterate through items
    for (let i = 0; i < elements.length; i++) {
        const currentValue = elements[i];
        if (currentValue) {
            if (map[currentValue]) {
                return currentValue;
            } else {
                map[currentValue] = 1;
            }
        }
    }

    return firstRepeatedElement;
}

const test = getFirstRepeatedElement([2, 5, 1, 2, 3, 5, 1, 2, 4]); // should return 2
console.log(test);

const test2 = getFirstRepeatedElement([2, 1, 1, 2, 3, 5, 1, 2, 4]); // should return 1
console.log(test2);

const test3 = getFirstRepeatedElement([2, 3, 4, 5]); // should return undefined
console.log(test3);
