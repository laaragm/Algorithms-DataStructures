// O(2^n)
export function fibonacciRecursive(n: number): number {
    if (n <= 1) {
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// O(n)
export function fibonacci(n: number): number {
    let sequenceElements = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        sequenceElements.push(Number(sequenceElements[i - 2]) + Number(sequenceElements[i - 1]));
    }

    let result = 0;
    if (sequenceElements.length >= n) {
        result = Number(sequenceElements[n]);
    }

    return result;
}
