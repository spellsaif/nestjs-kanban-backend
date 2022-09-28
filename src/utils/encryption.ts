import * as bcrypt from 'bcrypt';

const salt = 10
export async function hashPassword(password: string) {
    return bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, encryptedPassword: string) {
    return bcrypt.compare(password, encryptedPassword);
}