import { StackNode } from "./node";

// First in, Last out
export class Stack<T> {
    private top: StackNode<T> | null = null;
    private bottom: StackNode<T> | null = null;
    public length: number = 0;

    public peek(): StackNode<T> | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.top;
    }

    public push(data: T): StackNode<T> {
        const newNode = new StackNode(data);
        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const currentTopNode = this.top;
            this.top = newNode;
            this.top.next = currentTopNode;
        }
        this.length++;

        return newNode;
    }

    public pop(): StackNode<T> | null {
        if (this.top === this.bottom) {
            this.bottom = null;
        }

        const toRemove = this.top;
        if (this.top) {
            const newTopNode = this.top.next;
            this.top = newTopNode;
            this.length--;
        }

        return toRemove;
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }
}
