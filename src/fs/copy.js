import {cp} from "fs";
import {getDirname} from "../utils/getDirname.js";
import ApiError from "../utils/apiError.js";

export const copy = async () => {

    await cp(`${getDirname(import.meta.url)}/files`,
        `${getDirname(import.meta.url)}/files_copy`,
        {
            recursive: true,
            errorOnExist: true,
            force: false
        },
        (err) => {
            if (err) throw ApiError.BadRequest()
            console.log('copied');
        })
};

copy()
    .catch((err)=> console.log(err))
