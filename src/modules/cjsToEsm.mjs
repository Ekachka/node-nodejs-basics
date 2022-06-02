import {sep, dirname} from 'path';
import { release, version } from 'os';
import {fileURLToPath} from "url";
import { createServer as createServerHttp } from 'http';
import { createRequire } from 'module';
import {cFileJson} from './files/c.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const require = createRequire(import.meta.url);
const aFileJson = require('../modules/files/a.json');
const bFileJson = require('../modules/files/b.json');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = aFileJson;
} else {
    unknownObject = bFileJson;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {unknownObject, createMyServer}

