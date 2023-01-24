import { IUserInputData, IUser } from '../interfaces/user.interface';
import { GenericRepository } from '../interfaces/generic.repo';
import { IHashService } from 'services/hashService.interface';
import { userFactory } from '../entities';

export default function addUserFactory(
    userDB: GenericRepository<IUser>,
    hashService: IHashService
) {
    return async function (userData: IUserInputData) {
        if (!userData) {
            throw new Error('User data is missing');
        }

        const userExists = await userDB.findOne(userData.email);
        if (userExists) {
            throw new Error('User is alreday registered');
        }

        const user = userFactory.make(userData);
        const hashedPassword = await hashService.hash(user.password);

        return await userDB.insert({
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            password: hashedPassword,
            createdAt: user.createdAt,
            role: user.role,
            isVerified: user.isVerified,
            streamKey: user.streamKey,
        });
    };
}