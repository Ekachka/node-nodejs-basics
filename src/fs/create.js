import {writeFile} from 'fs';
import {getDirname} from "./utils/getDirname.js";
import ApiError from "./apiError/apiError.js";

export const create = async () => {
    const text = 'I am fresh and young'
    const file = `${getDirname(import.meta.url)}/files/fresh.txt`

    writeFile(file, text, {flag: 'wx+'}, (err) => {
        if (err) throw ApiError.BadRequest()
        console.log('created');
    })
};

create()
