import {createWriteStream} from 'fs'
import {getDirname} from "../utils/getDirname.js";

const {stdin, stdout} = process;

export const write = async () => {
    const writable = await createWriteStream(`${getDirname(import.meta.url)}/files/fileToWrite.txt`)

    stdout.write('Enter the text: ');
    stdin.on('data', data => {
        writable.write(data)
        process.exit();
    });
};

write()
    .catch((err)=> console.log(err))
