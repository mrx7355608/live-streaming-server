import { userServices } from '@/core/interactors';
import getUsersFactory from './getUsers';
import getOneUserFactory from './getUserById';

export const userControllers = {
    getUsers: getUsersFactory(userServices.listAllUsers),
    getOneUser: getOneUserFactory(userServices.listOneUser),
};
