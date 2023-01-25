import listAllUsersFactory from './listAllUsers';
import listOneUserFactory from './listOneUser';
import addUserFactory from './addUser';
import { UserDB } from '@/data/user.data';
import { HashService } from '../../services/hash.services';

const userDB = new UserDB();
const hashService = new HashService();

export const userServices = {
    listAllUsers: listAllUsersFactory(userDB),
    listOneUser: listOneUserFactory(userDB),
    addUser: addUserFactory(userDB, hashService),
};
