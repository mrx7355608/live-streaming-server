import addUserFactory from './addUser';
import { MockUserDB } from '../../../tests/mocks/mockUserDB';
import { MockHashService } from '../../../tests/mocks/mockHashService';
import { IUserInputData } from '../interfaces/user.interface';

const userDB = new MockUserDB();
const hashService = new MockHashService();

const addUser = addUserFactory(userDB, hashService);
const userData: IUserInputData = {
    fname: 'Test',
    lname: 'User',
    email: 'test@email.co',
    password: 'someStrongPassword123',
    confirmPassword: 'someStrongPassword123',
};

describe('Add User', () => {
    it('throws error when data is not given', async () => {
        try {
            await addUser({} as any);
        } catch (err: any) {
            expect(err.message).toBe('User data is missing');
        }
    });
    it('throws error when user is already registered', async () => {
        try {
            await addUser(userData);
            await addUser(userData);
        } catch (err: any) {
            expect(err.message).toBe('User is already registered');
        }
    });
    it.skip('creates a user', async () => {
        const hashed = await hashService.hash(userData.password);
        const user = await addUser(userData);
        expect(user.fname).toBe('Test');
        expect(user.email).toBe('test@email.c');
        expect(user.password).toBe(hashed);
    });
});
