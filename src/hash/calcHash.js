import {readFile} from "fs";
import {getDirname} from "../utils/getDirname.js";
import ApiError from "../utils/apiError.js";

const {createHash} = await import('crypto');


const createSha = async (content) => await new Promise((resolve => resolve(
    createHash('sha256').update(content).digest('hex')))
)

export const calculateHash = async () => {
    await readFile(`${getDirname(import.meta.url)}/files/fileToCalculateHashFor.txt`, 'utf8',
        (err, fileContent) => {
            if (err) throw ApiError.BadRequest()

            try {
                createSha(fileContent).then(res => console.log(res))
            } catch (err) {
                throw ApiError.BadRequest()
            }
        })
};

calculateHash()
