import { User } from './user.entity';
import validator from 'validator';
import sanitize from 'sanitize-html';
import crypto from 'crypto';

export const userFactory = new User({
    sanitize,
    createStreamKey,
    detectSpecialCharacters,
    emailValidator: validator.isEmail,
});

function createStreamKey(): string {
    const key = crypto.randomBytes(15).toString('hex');
    return key;
}
function detectSpecialCharacters(str: string): boolean {
    const regex = /[^A-Za-z 0-9]/g;
    return regex.test(str);
}
