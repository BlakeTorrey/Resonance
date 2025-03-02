import { Schema, model, type Document } from 'mongoose';

export interface UserDocument extends Document {
    id: string;
    username: string;
    email: string;
    password: string;
    emailUpdates: boolean;
    isCorrectPassword(password: string): Promise<boolean>;
}


const userSchema = new Schema<UserDocument>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        emailUpdates: {
            type: Boolean,
        },
    }
);



const User = model<UserDocument>('User', userSchema);

export default User;