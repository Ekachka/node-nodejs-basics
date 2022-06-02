export const parseArgs = () => {
    const argvArray = process.argv.slice(2).map((arg, index) => {
        if (index === 1) {
            return `${arg},`
        }
        if (arg.includes('--')) {
            return `${arg.substring(2)} is`
        }
        return arg
    })

    console.log(...argvArray);
}

parseArgs()
