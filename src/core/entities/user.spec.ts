import { userFactory } from './index';

const userData = {
    fname: 'Test',
    lname: 'User',
    email: 'testuser@example.com',
    password: 'strongPassword_123',
    confirmPassword: 'strongPassword_123',
};

describe('First name', () => {
    it('throws error when first name is not given', () => {
        expect(() => userFactory.make({ ...userData, fname: '' })).toThrow(
            'First name is missing'
        );
    });
    it('throws error when first name is short', () => {
        expect(() => userFactory.make({ ...userData, fname: 'mzy' })).toThrow(
            'First name should be 4 characters long at least'
        );
    });
    it('throws error when first name contains special characters', () => {
        expect(() =>
            userFactory.make({ ...userData, fname: 'mzy@#../' })
        ).toThrow('First name should not contain special characters');
    });
});

describe('Email', () => {
    it('throws error when email is not given', () => {
        expect(() => userFactory.make({ ...userData, email: '' })).toThrow(
            'Email is missing'
        );
    });
    it('throws error when email is invalid', () => {
        expect(() =>
            userFactory.make({ ...userData, email: 'invaild@email@..com/@' })
        ).toThrow('Invalid email');
    });
});

describe('Password', () => {
    it('throws error when password is not given', () => {
        expect(() => userFactory.make({ ...userData, password: '' })).toThrow(
            'Password is missing'
        );
    });
    it('throws error when password is short', () => {
        expect(() =>
            userFactory.make({ ...userData, password: '12344' })
        ).toThrow('Password should be 10 characters long at least');
    });
});

describe('Confirm Password', () => {
    it('throws error when passwords do not match', () => {
        expect(() =>
            userFactory.make({ ...userData, password: '123456789011' })
        ).toThrow('Passwords do not match');
    });
});
