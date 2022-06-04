import {readdir} from 'fs';
import {getDirname} from "../utils/getDirname.js";
import ApiError from "../utils/apiError.js";

export const list = async () => {
    await readdir(`${getDirname(import.meta.url)}/files`, 'utf8',
        (err, data) => {
        if (err) throw ApiError.BadRequest();
        console.log(data);
    });
};

list()
    .catch((err)=> console.log(err))
