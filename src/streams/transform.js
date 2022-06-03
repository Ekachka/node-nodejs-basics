import {Transform, pipeline} from "stream";

const {stdin, stdout} = process
stdout.write('Enter the text: ');

export const transform = async () => {
    const reverseString = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().trim().split('').reverse().join(''));
        },
    });

   await pipeline(
        stdin,
        reverseString,
        stdout,
        err => {
            console.log(err)
        }
    )
};

transform()
    .catch((err)=> console.log(err))
