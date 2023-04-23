export class QueueNode<T> {
    public data: T | null = null;
    public next: QueueNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}
