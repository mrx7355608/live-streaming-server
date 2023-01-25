import { IHashService } from '../../src/services/hashService.interface';

export class MockHashService implements IHashService {
    async hash(str: string): Promise<string> {
        return `${str}-hashed-123`;
    }
    async compare(hash: string, str: string): Promise<boolean> {
        const newHash = await this.hash(str);
        return newHash === hash;
    }
}
