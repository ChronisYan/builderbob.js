import * as path from 'path'; // use path.posix:
import { Tree, FSN } from './tree'
import * as vn from './validName'

// Import and use corrent valid name checks for each OS
let validName: (name: string) => string | null;
const os = process.platform;
switch (os) {
    case "linux":
        validName = vn.validNameLinux;
        break;
}

export default (data: string, absPath: string): Tree | Error => {
    const root = new FSN(absPath);
    const currentDirStack = [root];
    const array = data.trim().split("\n");

    for (let el of array) {
        let level = 0;

    }

    return root;
}

