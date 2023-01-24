import { GenericRepository } from '@/core/interfaces/generic.repo';
import { IUser } from '@/core/interfaces/user.interface';

interface IMockUser extends IUser {
    _id: string;
}

const users: IMockUser[] = [];

export class MockUserDB implements GenericRepository<IMockUser> {
    async findAll(): Promise<IMockUser[]> {
        return users;
    }
    async findById(id: string): Promise<IMockUser> {
        const user = users.filter((usr) => usr._id === id)[0];
        return user;
    }
    async findOne(email: string): Promise<IMockUser> {
        const user = users.filter((usr) => usr.email === email)[0];
        return user;
    }
    async update(id: string, changes: IUser): Promise<IMockUser> {
        const updatedUser = users.filter((usr) => usr._id === id)[0];
        return updatedUser;
    }
    async delete(id: string): Promise<Boolean> {
        users.filter((usr) => usr._id !== id)[0];
        return true;
    }
    async insert(data: IUser): Promise<IMockUser> {
        const newUser = {
            _id: '123',
            ...data,
        };
        users.push(newUser);
        return newUser;
    }
}
