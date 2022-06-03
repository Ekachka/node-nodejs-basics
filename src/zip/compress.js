import {createGzip} from 'zlib'
import {pipeline} from 'stream';
import {createReadStream, createWriteStream} from 'fs'
import {getDirname} from "../utils/getDirname.js";
import ApiError from "../utils/apiError.js";

export const compress = async () => {
    const source = createReadStream(`${getDirname(import.meta.url)}/files/fileToCompress.txt`);
    const destination = createWriteStream(`${getDirname(import.meta.url)}/files/archive.gz`);

    await pipeline(
        source,
        createGzip(),
        destination,
        (err) => {
            if (err) {
                throw ApiError.BadRequest()
            }
        }).on('finish', () => console.log('done'));

};

compress()
    .catch((err)=> console.log(err.message))
