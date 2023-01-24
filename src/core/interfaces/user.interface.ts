export interface IUser {
    fname: string;
    lname: string;
    email: string;
    password: string;
    role: string;
    isVerified: boolean;
    streamKey: string;
    createdAt: Date;
}

export interface IUserEntity extends IUser {
    verifyUser(): void;
    makeAdmin(): void;
}
export interface IUserHelperFunctions {
    sanitize: (str: string) => string;
    createStreamKey: () => string;
    detectSpecialCharacters: (str: string) => boolean;
    emailValidator: (email: string) => boolean;
}
export interface IUserInputData {
    fname: string;
    lname: string;
    email: string;
    password: string;
    confirmPassword: string;
}
