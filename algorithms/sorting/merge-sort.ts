// Space complexity: O(n)
// Time complexity: O(n log(n))
export function mergeSort(elements: number[]) {
    if (elements.length === 1) {
        return elements;
    }

    // Split array (right and left)
    const length = elements.length;
    const middle = Math.floor(length / 2);
    const left = elements.slice(0, middle);
    const right = elements.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
