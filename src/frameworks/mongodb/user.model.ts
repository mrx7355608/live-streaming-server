import mongoose from 'mongoose';
import { IUser } from '@/core/interfaces/user.interface';

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    isVerified: Boolean,
    role: String,
    streamKey: String,
    createdAt: Date,
});

export const UserModel = mongoose.model<IUser>('User', userSchema);
