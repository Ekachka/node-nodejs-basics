import {Worker} from 'worker_threads'
import {getDirname} from "../utils/getDirname.js";
import {cpus} from 'os'

const runWorker = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(`${getDirname(import.meta.url)}/worker.js`, {workerData})

        worker.on('message', resolve)
        worker.on('error', () => reject(null))
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });
    })
}


const transformStatus = (statuses) => statuses.map(status => {
    if (status.status === 'fulfilled') {
        return {...status, status: 'resolved'}
    }
    return {...status, status: 'error'}
})


export const performCalculations = async () => {
    const promises = Array.from({length: cpus().length}, (v, k) => runWorker(10 + k))

    const result = await Promise.allSettled(promises).then(statuses => {
        return  transformStatus(statuses)
    })

    console.log(result);
};

performCalculations()
    .catch(err => console.log(err))
