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
    let nestedLevel = 0;
    let afterName = false;
    let i = 1;

    if (array[0] !== "{" && array[arrayLen - 1] !== "}") {
        return new Error("The structure in .bob should be inside {}")
    }

    while (i < arrayLen - 1) {
        if (array[i] === " " || array[i] === "\n") {
            i++;
            continue
        };
        if ((afterName && array[i] !== "{") || (afterName && array[i] !== ",")) return new Error(`Invalid Character in .bob '${array[i]}'`);
        if ((!afterName && array[i] !== "\"") || (!afterName && array[i] !== "}")) return new Error(`Invalid Character in .bob '${array[i]}'`);
        if (array[i] === "}") nestedLevel--;
        if (array[i] === "{") {
            nestedLevel++;
            afterName = false;
        } else if (array[i] === ",") {
            afterName = false;
        }

        if (array[i] === "\"") {
            let name = "";
            i++;
            while (i < arrayLen - 1 && array[i] !== "\"") {
                if (array[i] === "\\") {
                    name += "\\" + array[i + 1];
                    i++;
                    continue
                };

                name += array[i];

                i++;
            }
            const validationError = validName(name);
            if (validationError) {
                return new Error(validationError);
            } else {
                root.addChild(name);
            }
            afterName = true;
            i++;
        }


        i++;
    }
    if (nestedLevel !== 0) return new Error("Invalid Character in .bob")

    return root;
}

