import {createReadStream} from 'fs';
import {getDirname} from "../utils/getDirname.js";

const {stdout} = process;

export const read = async () => {
    const readable = createReadStream(`${getDirname(import.meta.url)}/files/fileToRead.txt`, 'utf-8')
    let data = ''
    readable.on('data', chunk => data += chunk)
    readable.on('end', chunk => stdout.write(data))
    readable.on('err', error => stdout.write(error.message))

};

read()
