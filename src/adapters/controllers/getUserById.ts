import { IUser } from '@/core/interfaces/user.interface';
import { IHttpRequest } from '../interfaces/httpRequest.interface';

export default function getOneUserFactory(
    listOneUsers: (id: string) => Promise<IUser>
) {
    return async function (httpRequest: IHttpRequest) {
        try {
            const params = httpRequest.params as any;
            const user = await listOneUsers(params.id as string);
            return {
                statusCode: 200,
                body: user,
            };
        } catch (err: any) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
