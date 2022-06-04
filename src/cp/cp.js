import child_process from 'child_process';
import {getDirname} from "../utils/getDirname.js";

export const spawnChildProcess = async (args) => {
    await child_process.fork(`${getDirname(import.meta.url)}/files/script.js`, args);
};

spawnChildProcess(['ok', 'no', 'wow'])
    .catch((err) => console.log(err))
