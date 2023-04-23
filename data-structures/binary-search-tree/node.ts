export class BSTNode<T> {
    public data: T | null = null;
    public left: BSTNode<T> | null = null;
    public right: BSTNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}
