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

export interface IUserInputData {
    fname: string;
    lname: string;
    email: string;
    password: string;
    confirmPassword: string;
}
