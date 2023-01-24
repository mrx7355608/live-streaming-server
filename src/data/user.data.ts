import { GenericRepository } from '../core/interfaces/generic.repo';
import { IUser } from '../core/interfaces/user.interface';
import { UserModel } from '@/frameworks/mongodb/user.model';

export class UserDB implements GenericRepository<IUser> {
    async findAll(): Promise<IUser[]> {
        const users = await UserModel.find();
        return users;
    }
    async findById(id: string): Promise<IUser> {
        const user = (await UserModel.findById(id)) as IUser;
        return user;
    }
    async findOne(filter: Object): Promise<IUser> {
        const user = (await UserModel.findOne(filter)) as IUser;
        return user;
    }
    async update(id: string, changes: IUser): Promise<IUser> {
        const updatedUser = (await UserModel.findByIdAndUpdate(id, changes, {
            new: true,
        })) as IUser;
        return updatedUser;
    }
    async delete(id: string): Promise<Boolean> {
        const res = await UserModel.findByIdAndDelete(id);
        return res ? true : false;
    }
    async insert(data: IUser): Promise<IUser> {
        const newUser = await UserModel.create(data);
        return newUser;
    }
}
