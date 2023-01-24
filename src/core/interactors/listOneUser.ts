import { GenericRepository } from '../interfaces/generic.repo';
import { IUser } from '../interfaces/user.interface';
import validator from 'validator';

export default function listOneFactory(userDB: GenericRepository<IUser>) {
    return async function (id: string) {
        if (!id) {
            throw new Error('User Id is missing');
        }
        if (!validator.isMongoId(id)) {
            throw new Error('Invalid Id');
        }

        const user = await userDB.findById(id);
        if (!user) {
            throw new Error('User does not exist');
        }

        return user;
    };
}
