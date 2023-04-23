export class Node<T> {
	public next: Node<T> | null = null;
	public previous: Node<T> | null = null;

	constructor(public data: T) {}
}
