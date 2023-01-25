import { IHttpRequest } from '../interfaces/httpRequest.interface';
import { IUser } from '@/core/interfaces/user.interface';

export default function getUsersFactory(listUsers: () => Promise<IUser[]>) {
    return async function (httpRequest: IHttpRequest) {
        try {
            const users = await listUsers();
            return {
                statusCode: 200,
                body: users,
            };
        } catch (err: any) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
