// Space complexity: O(log(n))
// Time complexity: O(n^2) in the worst case (when the pivot is either the smallest or largest element). Average is O(n log(n))
export function quickSort(elements: number[], left: number, right: number) {
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(elements, pivot, left, right);

        // Sort left and right
        quickSort(elements, left, partitionIndex - 1);
        quickSort(elements, partitionIndex + 1, right);
    }

    return elements;
}

function partition(elements: number[], pivot: number, left: number, right: number) {
    let pivotValue = elements[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        const currentElement = elements[i];
        if (currentElement < pivotValue) {
            swap(elements, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(elements, right, partitionIndex);

    return partitionIndex;
}

function swap(elements: number[], firstIndex: number, secondIndex: number) {
    let temp = elements[firstIndex];
    elements[firstIndex] = elements[secondIndex];
    elements[secondIndex] = temp;
}
