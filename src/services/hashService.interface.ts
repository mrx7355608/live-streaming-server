export interface IHashService {
    hash(str: string): Promise<string>;
    compare(hash: string, str: string): Promise<boolean>;
}
