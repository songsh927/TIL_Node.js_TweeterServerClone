import dotenv from 'dotenv';
dotenv.config();

function required(key, defaultValue = undefined){
    const value = process.env[key] || defaultValue;
    if(value == null){
        throw new Error(`Key ${key} is undefined`)
    }
}

export const config = {
    jwt: {
        secretKey: required('JWT_SECRET'),
        expriesInSec: parseInt(required('JWT_EXPIRES_SEC', 86400)),
    },
    bcrypt: {
        saltRounds: parseInt(required('BCRYPT_SALT_ROUND',12)),
    },
    host: {
        serverPort: parseInt(required('SERVER_PORT',8080)),
    }

}