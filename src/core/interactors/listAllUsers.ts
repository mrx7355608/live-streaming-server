import { GenericRepository } from '../interfaces/generic.repo';
import { IUser } from '../interfaces/user.interface';

export default function listAllUsersFactory(userDB: GenericRepository<IUser>) {
    return async function (): Promise<IUser[]> {
        // TODO: add pagination and query search
        return await userDB.findAll();
    };
}
