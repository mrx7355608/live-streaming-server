import {
    IUserInputData,
    IUserEntity,
    IUserHelperFunctions,
} from '../interfaces/user.interface';

export class User {
    private sanitize: (str: string) => string;
    private createStreamKey: () => string;
    private detectSpecialCharacters: (str: string) => boolean;
    private emailValidator: (email: string) => boolean;

    constructor({
        sanitize,
        createStreamKey,
        detectSpecialCharacters,
        emailValidator,
    }: IUserHelperFunctions) {
        this.sanitize = sanitize;
        this.createStreamKey = createStreamKey;
        this.detectSpecialCharacters = detectSpecialCharacters;
        this.emailValidator = emailValidator;
    }

    public make(userData: IUserInputData): IUserEntity {
        let { fname, lname, email, password, confirmPassword } = userData;

        this.validateName(fname, 'First');
        fname = this.sanitize(fname);

        this.validateName(lname, 'Last');
        lname = this.sanitize(lname);

        this.validateEmail(email);

        this.validatePassword(password);
        password = this.sanitize(password);

        this.validateConfirmPassword(password, confirmPassword);
        confirmPassword = this.sanitize(confirmPassword);

        let role = 'user';
        let isVerified = false;
        const createdAt = new Date(Date.now());
        const streamKey = this.createStreamKey();

        return {
            fname,
            lname,
            email,
            password,
            role,
            isVerified,
            streamKey,
            createdAt,
            makeAdmin: () => {
                role = 'admin';
            },
            verifyUser: () => {
                isVerified = true;
            },
        };
    }

    private validateName(name: string, label: string): void {
        if (!name) {
            throw new Error(`${label} name is missing`);
        }
        if (typeof name !== 'string') {
            throw new Error(`${label} name should be a text value`);
        }
        if (name.length < 4) {
            throw new Error(
                `${label} name should be 4 characters long at least`
            );
        }
        if (this.detectSpecialCharacters(name)) {
            throw new Error(
                `${label} name should not contain special characters`
            );
        }
    }
    private validateEmail(email: string): void {
        if (!email) {
            throw new Error('Email is missing');
        }
        if (typeof email !== 'string') {
            throw new Error('Email should be a text value');
        }
        if (!this.emailValidator(email)) {
            throw new Error('Invalid email');
        }
    }
    private validatePassword(password: string): void {
        if (!password) {
            throw new Error('Password is missing');
        }
        if (typeof password !== 'string') {
            throw new Error('Password should be a text value');
        }
        if (password.length < 10) {
            throw new Error('Password should be 10 characters long at least');
        }
    }
    private validateConfirmPassword(
        password: string,
        confirmPassword: string
    ): void {
        if (typeof confirmPassword !== 'string') {
            throw new Error('Confirm password should be a text value');
        }
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }
    }
}
