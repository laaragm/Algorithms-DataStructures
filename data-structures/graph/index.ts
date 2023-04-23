type AdjacentList<T extends string | number> = { [K in T]?: Set<T> };

export class Graph<T extends string | number> {
    private adjacentList: AdjacentList<T>;
    public numberOfNodes: number;

    constructor() {
        this.adjacentList = {};
        this.numberOfNodes = 0;
    }

    public getNodeCount(): number {
        return this.numberOfNodes;
    }

    public addVertex(node: T) {
        this.adjacentList[node] = new Set();
        this.numberOfNodes++;
    }

    public addEdge(node1: T, node2: T) {
        // Undirected Graph
        this.adjacentList[node1]?.add(node2);
        this.adjacentList[node2]?.add(node1);
    }

    public removeEdge(node1: T, node2: T) {
        this.adjacentList[node1]?.delete(node2);
        this.adjacentList[node2]?.delete(node1);
    }

    public showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node as T];
            let connections = "";
            let vertex;
            if (nodeConnections) {
                for (vertex of nodeConnections) {
                    connections += vertex + " ";
                }
                console.log(node + "-->" + connections);
            }
        }
    }
}
