import { Queue } from "./queue";

const queue = new Queue();

// Test enqueue
queue.enqueue("daniela");
queue.enqueue("lara");
queue.enqueue("clarice");
queue.enqueue("lolla");
console.log(queue);

// Test dequeue
queue.dequeue();
console.log(queue);

// Test peek
const node = queue.peek();
console.log(node);
