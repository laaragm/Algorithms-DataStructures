export class StackNode<T> {
    public data: T | null = null;
    public next: StackNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}
