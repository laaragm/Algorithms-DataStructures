// Space complexity: O(1)
// Time complexity: O(n^2)
export function insertionSort(elements: number[]): number[] {
    const len = elements.length;
    for (let i = 0; i < len; i++) {
        // If the item we're looping for is lower than the first item in the array
        if (elements[i] < elements[0]) {
            // Move number to the first position
            elements.unshift(elements.splice(i, 1)[0]);
        } else {
            // Find where number should go
            for (let j = 1; j < i; j++) {
                if (elements[i] > elements[j - 1] && elements[i] < elements[j]) {
                    // Move number to the right spot
                    elements.splice(j, 0, elements.splice(i, 1)[0]);
                }
            }
        }
    }

    return elements;
}
