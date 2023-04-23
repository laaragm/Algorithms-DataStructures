// Space complexity: O(1)
// Time complexity: O(n^2)
export function selectionSort(elements: number[]): number[] {
    const len = elements.length;
    for (let i = 0; i < len; i++) {
        // Set current index as min
        let minIndex = i;
        let temp = elements[i];
        for (let j = i + 1; j < len; j++) {
            if (elements[j] < elements[minIndex]) {
                // Update the minimum if current is lower than what we had before
                minIndex = j;
            }
        }
        // Swap elements
        elements[i] = elements[minIndex];
        elements[minIndex] = temp;
    }

    return elements;
}
