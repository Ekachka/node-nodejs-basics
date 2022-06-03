import {createReadStream} from 'fs';
import {getDirname} from "../utils/getDirname.js";

const {stdout} = process;

export const read = async () => {
    let data = ''
    const readable = await createReadStream(`${getDirname(import.meta.url)}/files/fileToRead.txt`, 'utf-8')

    readable.on('data', chunk => data += chunk)
    readable.on('end', chunk => stdout.write(data))
    readable.on('err', error => stdout.write(error.message))

};

read()
    .catch((err)=> console.log(err))
