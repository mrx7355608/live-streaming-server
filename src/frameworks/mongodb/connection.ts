import mongoose from 'mongoose';

export async function connectToDb(dbUri: string) {
    mongoose.set('strictQuery', true);
    await mongoose.connect(dbUri);
    console.log('Connected to db');
}
