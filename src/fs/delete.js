import {unlink} from 'fs'
import {getDirname} from "./utils/getDirname.js";
import ApiError from "./apiError/apiError.js";

export const remove = async () => {
    await unlink(`${getDirname(import.meta.url)}/files/fileToRemove.txt`,
        (err) => {
        if (err) throw ApiError.BadRequest()
        console.log('removed');
    })
};

remove()

