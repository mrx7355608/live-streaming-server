export abstract class GenericRepository<T> {
    abstract findAll(): Promise<T[]>;
    abstract findById(id: string): Promise<T>;
    abstract findOne(filter: Object): Promise<T>;
    abstract insert(data: T): Promise<T>;
    abstract update(id: string, changes: T): Promise<T>;
    abstract delete(id: string): Promise<Boolean>;
}
