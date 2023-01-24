import { IUser, IUserData } from '../interfaces/user.interface';

class User {
    // TODO: Fix sanitize and streamkey types
    private sanitize: Function;
    private createStreamKey: Function;
    private detectSpecialCharacters: Function;
    private emailValidator: Function;

    constructor(
        sanitize: Function,
        createStreamKey: Function,
        detectSpecialCharacters: Function,
        emailValidator: Function
    ) {
        this.sanitize = sanitize;
        this.createStreamKey = createStreamKey;
        this.detectSpecialCharacters = detectSpecialCharacters;
        this.emailValidator = emailValidator;
    }

    public make(userData: IUserData): IUser {
        let { fname, lname, email, password, confirmPassword } = userData;
        // sanitize input
        fname = this.sanitize(fname);
        lname = this.sanitize(lname);
        password = this.sanitize(password);
        confirmPassword = this.sanitize(confirmPassword);

        // validate input
        this.validateName(fname, 'First');
        this.validateName(lname, 'Last');
        this.validateEmail(email);
        this.validatePassword(password);
        this.validateConfirmPassword(password, confirmPassword);

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
        if (!this.emailValidator(email)) {
            throw new Error('Invalid email');
        }
    }
    private validatePassword(password: string): void {
        if (!password) {
            throw new Error('Password is missing');
        }
        if (password.length < 10) {
            throw new Error('Password should be 10 characters long at least');
        }
    }
    private validateConfirmPassword(
        password: string,
        confirmPassword: string
    ): void {
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }
    }
}
