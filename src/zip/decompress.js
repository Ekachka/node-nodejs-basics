import {createGunzip} from 'zlib'
import {createReadStream, createWriteStream} from "fs";
import {getDirname} from "../utils/getDirname.js";
import {pipeline} from "stream";
import ApiError from "../utils/apiError.js";

export const decompress = async () => {
    const source = createReadStream(`${getDirname(import.meta.url)}/files/archive.gz`);
    const destination = createWriteStream(`${getDirname(import.meta.url)}/files/fileToCompress.txt`)

    await pipeline(
        source,
        createGunzip(),
        destination,
        (err) => {
            if (err) {
                throw ApiError.BadRequest()
            }

        }).on('finish', () => console.log('done'));
};

decompress()
    .catch((err)=> console.log(err))
