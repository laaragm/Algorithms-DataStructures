export function reverseString(str: string): string {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.charAt(i);
    }

    return reversedStr;
}

export function reverseStringRecursion(str: string): string {
    if (str.length === 0) {
        return str;
    }

    const lastCharacter = str.charAt(str.length - 1);
    const remainingCharacters = str.substring(0, str.length - 1);

    return lastCharacter + reverseStringRecursion(remainingCharacters);
}
