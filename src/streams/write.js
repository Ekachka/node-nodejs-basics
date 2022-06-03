import {createWriteStream} from 'fs'
import {getDirname} from "../utils/getDirname.js";

const {stdin, stdout} = process;

export const write = async () => {
    const path = getDirname(import.meta.url)
    const writable = createWriteStream(`${path}/files/fileToWrite.txt`)

    stdout.write('Enter the text: ');
    stdin.on('data', data => {
        writable.write(data)
        process.exit();
    });
};

write()
