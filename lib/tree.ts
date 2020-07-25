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

    addChild(dirName: string | string[]): void {
        // for single element
        if (!Array.isArray(dirName)) {
            const node = new FSN(dirName);
            node.addPath(this);
            this.children.push(node);
            return;
        }

        dirName.forEach(dir => {
            const node = new FSN(dir);
            node.addPath(this);
            this.children.push(node)
        })

        return;
    }
}

export {
    FSN,
    Tree
}