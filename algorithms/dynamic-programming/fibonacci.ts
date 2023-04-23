// Recursive fibonacci: O(2^n)
// Recursive fibonacci with memoization: O(n)
export function fibonacci() {
    let cache = {};

    return function fib(n: number): number {
        if (n in cache) {
            return cache[n];
        }

        if (n < 2) {
            return n;
        }
        cache[n] = fib(n - 1) + fib(n - 2);

        return cache[n];
    };
}
