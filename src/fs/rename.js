import {access, rename as renameFile} from 'fs'
import {getDirname} from "./utils/getDirname.js";
import ApiError from "./apiError/apiError.js";

export const rename = async () => {
    const filePath = `${getDirname(import.meta.url)}/files/`

    await access(`${filePath}properFilename.md`,(err) => {
            if (err) return
            throw  ApiError.BadRequest()
        })

    await renameFile(`${filePath}wrongFilename.txt`,`${filePath}properFilename.md`,
        (err) => {
            if (err) throw ApiError.BadRequest()
            console.log('renamed')
        })
};

rename()
