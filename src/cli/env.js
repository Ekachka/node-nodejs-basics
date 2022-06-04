export const parseEnv = () => {
    const result = []
    const keys = Object.keys(process.env);

    keys.forEach(key => {
        if (key.includes('RSS_'))
            result.push(`${key}=${process.env[key]}`)
    });

    console.log(result.join('; '));
};

parseEnv()
