interface Tree {
    value: string;
    children: Tree[];
    addPath(parent: Tree): void;
}

// A node in a file structure (directory or file)
class FSN implements Tree {
    value: string;
    children: Tree[];
    private path: string | null;

    constructor(value: string) {
        this.value = value;
        this.path = null;
        this.children = [];
    }

    addPath(parent: Tree): void {
        this.path = parent.value;
    }
    getPath(): string {
        if (!this.path) {
            return "Top Level Elemnt";
        }

        return this.path;
    }

    addChild(dirName: string): void {
        const node = new FSN(dirName);
        node.addPath(this);
        this.children.push(node);
        return;
    }
}

export {
    FSN,
    Tree
}