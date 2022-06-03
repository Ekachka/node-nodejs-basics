import {readFile} from 'fs';
import ApiError from "../utils/apiError.js";
import {getDirname} from "../utils/getDirname.js";

export const read = async () => {
    await readFile(`${getDirname(import.meta.url)}/files/fileToRead.txt`,"utf8",
        (err, data) => {
            if (err) throw ApiError.BadRequest();
            console.log(data);
        })
};

read()
