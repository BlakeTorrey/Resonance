import { Schema, model, type Document } from 'mongoose';
// find auth management package for next,  import {} from '';


import artistSchema, { ArtistDocument } from './artist';
import eventSchema, { EventDocument } from './event';

export interface UserDocument extends Document {
    id: string;
    username: string;
    email: string;
    password: string;
    emailUpdates: boolean;
    savedArtists: ArtistDocument[];
    savedEvents: EventDocument[];
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
        savedArtists: [artistSchema],
        savedEvents: [eventSchema],
    }
);


userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
 // use whatever auth package we choose to salt password
 //  this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password: string) {
// use auth package to compare passwords
//    return await bcrypt.compare(password, this.password);
};


const User = model<UserDocument>('User', userSchema);

export default User;