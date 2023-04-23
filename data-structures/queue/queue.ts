import { QueueNode } from "./node";

// First in, First out
export class Queue<T> {
    private first: QueueNode<T> | null = null;
    private last: QueueNode<T> | null = null;
    public length: number = 0;

    public peek(): QueueNode<T> | null {
        return this.first;
    }

    public enqueue(data: T): QueueNode<T> {
        const newNode = new QueueNode(data);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const currentLastNode = this.last;
            if (currentLastNode) currentLastNode.next = newNode;
            this.last = newNode;
        }
        this.length++;

        return newNode;
    }

    public dequeue(): QueueNode<T> | null {
        if (this.isEmpty()) return null;

        if (this.first === this.last) {
            this.last = null;
        }

        const currentFirstNode = this.first;
        if (currentFirstNode) {
            this.first = currentFirstNode.next;
        }
        this.length--;

        return currentFirstNode;
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }
}
