import { Node } from "./node";

export class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    public length = 0;

    public prepend(data: T): Node<T> {
        const currentNode = new Node(data);
        if (!this.head) {
            this.head = currentNode;
            this.tail = currentNode;
        } else {
            this.head.previous = currentNode;
            currentNode.next = this.head;
            this.head = currentNode;
        }
        this.length++;

        return currentNode;
    }

    public append(data: T): Node<T> {
        const currentNode = new Node(data);
        if (this.head) {
            currentNode.previous = this.tail;
            if (this.tail) this.tail.next = currentNode;
            this.tail = currentNode;
        } else {
            this.head = currentNode;
            this.tail = this.head;
        }
        this.length++;

        return currentNode;
    }

    public insert(index: number, data: T): Node<T> {
        if (index === 0) {
            return this.prepend(data);
        } else if (index >= this.length) {
            return this.append(data);
        }

        /* 
			leader    	  follower
				 \       /
				  newNode
		*/
        const currentNode = new Node<T>(data);
        const leaderNodeToReplace = this.getNodeAt(index - 1);
        const followerNodeToReplace = leaderNodeToReplace?.next;
        if (leaderNodeToReplace) leaderNodeToReplace.next = currentNode;
        currentNode.previous = leaderNodeToReplace;
        currentNode.next = followerNodeToReplace ? followerNodeToReplace : null;
        if (followerNodeToReplace) followerNodeToReplace.previous = currentNode;
        this.length++;

        return currentNode;
    }

    public getNodeAt(index: number): Node<T> | null {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            counter++;
        }

        return null;
    }

    public delete(node: Node<T>): void {
        if (!node.previous) {
            this.head = node.next;
        } else {
            const prevNode = node.previous;
            prevNode.next = node.next;
        }
        this.length--;
    }

    public deleteAt(index: number): void {
        if (index === 0) {
            this.delete(this.head as Node<T>);
        } else if (index >= this.length) {
            this.delete(this.tail as Node<T>);
        }

        const nodeToDelete = this.getNodeAt(index) as Node<T>;
        const leaderNodeToReplace = nodeToDelete.previous as Node<T>;
        const followerNodeToReplace = nodeToDelete.next;
        leaderNodeToReplace.next = followerNodeToReplace;
        if (followerNodeToReplace) followerNodeToReplace.previous = leaderNodeToReplace;
        this.length--;
    }

    public search(comparator: (data: T) => boolean): Node<T> | null {
        const checkNext = (node: Node<T>): Node<T> | null => {
            if (comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };

        return this.head ? checkNext(this.head) : null;
    }

    public traverse(): Node<T>[] {
        const array: Array<Node<T>> = [];
        let currentNode = this.head;
        while (currentNode) {
            array.push(currentNode);
            currentNode = currentNode.next;
        }

        return array;
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }

    public getFirst(): Node<T> | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.head;
    }

    public getLast(): Node<T> | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.tail;
    }

    public getIndexOfNode(node: Node<T> | null): number {
        if (!node) return -1;

        let currentNode = this.head;
        let counter = 0;
        while (currentNode) {
            if (node === currentNode) {
                return counter;
            }
            currentNode = currentNode.next;
            counter++;
        }

        return -1;
    }
}
