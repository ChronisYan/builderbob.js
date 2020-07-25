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

    const array = data.trim().split("");
    const arrayLen = array.length;
    let insideName = false;
    let nestedLevel = 0;
    let curIndex = 1;

    if (array[0] !== "{" && array[arrayLen - 1] !== "}") {
        return new Error("The structure in .bob should be inside {}")
    }

    while (curIndex < arrayLen - 1) {

    }
    return root;
}

