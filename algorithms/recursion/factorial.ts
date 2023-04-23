// O(n)
export function factorialRecursive(n: number): number {
    if (n === 0) {
        return 1;
    }

    return n * factorialRecursive(n - 1);
}

// O(n)
export function factorial(n: number): number {
    let result = 1;
    for (let i = n; i >= 1; i--) {
        result = result * i;
    }

    return result;
}
