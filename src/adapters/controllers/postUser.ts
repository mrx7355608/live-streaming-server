import { IUser, IUserInputData } from '@/core/interfaces/user.interface';
import { IHttpRequest } from '../interfaces/httpRequest.interface';

export default function postUserFactory(
    addUser: (data: IUserInputData) => Promise<IUser>
) {
    return async function (httpRequest: IHttpRequest) {
        try {
            const newUser = await addUser(httpRequest.body as IUserInputData);
            return {
                statusCode: 201,
                body: newUser,
            };
        } catch (err: any) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
