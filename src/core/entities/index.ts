import { User } from './user.entity';

export const userFactory = new User(
    sanitize,
    detectSpecialCharacters,
    createStreamKey,
    emailValidator
);

function sanitize() {}
function createStreamKey() {}
function emailValidator() {}
function detectSpecialCharacters() {}
