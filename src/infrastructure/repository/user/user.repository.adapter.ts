import { CreateUserInput, UserRepositoryPort } from "@/domain/repositories/user.repositories.port";
import { User } from '../../../domain/entities/user';
import { UserDocument, userSchema } from "./user.schema";
import { Model, Mongoose } from 'mongoose';

class UserRepositoryAdapter implements UserRepositoryPort {
    private model: Model<UserDocument>

    constructor(model: Model<UserDocument>) {
        this.model = model;
    }

    public async create(input: CreateUserInput): Promise<User> {
        const { email, emailUpdates, password, username, active, updatedAt, createdAt } = input;

        const userDocument = await this.model.create(input);

        return this.toObject(userDocument);
    }

    protected toObject(document: UserDocument): User {
        return {
            id: document._id.toHexString(),
            username: document.username,
            password: document.password,
            email: document.email,
            emailUpdates: document.emailUpdates,
            active: document.active,
            createdAt: document.createdAt,
            updatedAt: document.updatedAt,
        }
    }
}


const getUserRepositoryInstance = (mongoose: Mongoose): UserRepositoryAdapter =>
    new UserRepositoryAdapter(mongoose.model<UserDocument>('User', userSchema));

export { UserRepositoryAdapter, getUserRepositoryInstance };