import { Document, Schema, Types } from 'mongoose';
import { User } from '../../../domain/entities/user';

export interface UserDocument extends Document, Omit<User, 'id'> {
  _id: Types.ObjectId;
}

export const userSchema = new Schema<UserDocument>({
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
});
