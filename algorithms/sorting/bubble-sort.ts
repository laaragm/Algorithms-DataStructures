// Space complexity: O(1)
// Time complexity: O(n^2)
export function bubbleSort(elements: number[]): number[] {
    const len = elements.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (elements[j] > elements[j + 1]) {
                // Swap numbers
                const temp = elements[j];
                elements[j] = elements[j + 1];
                elements[j + 1] = temp;
            }
        }
    }

    return elements;
}
