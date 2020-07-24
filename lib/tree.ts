interface Tree {
    value: string;
    left: Tree | null;
    right: Tree | null;
}

// A node in a file structure (directory or file)
class FSN implements Tree {
    value: string;
    left: Tree | null;
    right: Tree | null;

    constructor(value: string) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export {
    FSN,
    Tree
}