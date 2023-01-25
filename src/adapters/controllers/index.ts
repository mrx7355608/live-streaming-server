import { userServices } from '@/core/interactors';
import getUsersFactory from './getUsers';
import getOneUserFactory from './getUserById';
import postUserFactory from './postUser';

export const userControllers = {
    getUsers: getUsersFactory(userServices.listAllUsers),
    getOneUser: getOneUserFactory(userServices.listOneUser),
    postUser: postUserFactory(userServices.addUser),
};
