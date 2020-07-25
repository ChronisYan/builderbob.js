import * as fs from 'fs';
import * as path from 'path'; // use path.posix:
import { Tree, FSN } from './tree'

const DEFAULTSTRUCTUREFILE = "/.bob";
const ROOTDIR = process.cwd();


const loadStructure = (): Promise<string | Error> => {
    return new Promise((resolve, reject) => {
        const structureFile = ROOTDIR + DEFAULTSTRUCTUREFILE;
        const readStream = fs.createReadStream(structureFile);
        let dataStr = "";

        readStream.on("data", (chunk) => {
            dataStr += chunk.toString()
        })

        readStream.on("end", () => {
            resolve(dataStr);
        })

        readStream.on("error", (err) => {
            reject(err)
        })
    })
}

const my_tree = loadStructure().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
})

const validDirName = () => {

}