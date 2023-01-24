export interface IUser {
    fname: string;
    lname: string;
    email: string;
    password: string;
    role: string;
    isVerified: boolean;
    streamKey: string;
    createdAt: Date;
    verifyUser(): void;
    makeAdmin(): void;
}

export interface IUserData {
    fname: string;
    lname: string;
    email: string;
    password: string;
    confirmPassword: string;
}
