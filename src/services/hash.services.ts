import { IHashService } from './hashService.interface';
import bcrypt from 'bcryptjs';

export class HashService implements IHashService {
    async hash(str: string): Promise<string> {
        return await bcrypt.hash(str, 10);
    }
    async compare(hash: string, str: string): Promise<boolean> {
        return await bcrypt.compare(hash, str);
    }
}
