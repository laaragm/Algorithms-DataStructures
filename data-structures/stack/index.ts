import { Stack } from "./stack";

const stack = new Stack();

// Test push
stack.push("google");
stack.push("youtube");
stack.push("udemy");
stack.push("gmail");
console.log(stack);

// Test pop
stack.pop();
console.log(stack);

// Test peek
const node = stack.peek();
console.log(node);
