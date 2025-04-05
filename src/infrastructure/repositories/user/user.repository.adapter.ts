import { Model, Mongoose } from 'mongoose';
import { User } from '../../../domain/entities/user';
import { CreateUserInput, UserRepositoryPort } from '../../../domain/repositories/user.repository.port';
import { UserDocument, userSchema } from './user.schema';

class UserRepositoryAdapter implements UserRepositoryPort {
  private model: Model<UserDocument>;

  constructor(model: Model<UserDocument>) {
    this.model = model;
  }

  public async create(input: CreateUserInput): Promise<User> {
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
    };
  }
}

const getUserRepositoryInstance = (mongoose: Mongoose): UserRepositoryAdapter =>
  new UserRepositoryAdapter(mongoose.model<UserDocument>('User', userSchema));

export { getUserRepositoryInstance, UserRepositoryAdapter };
