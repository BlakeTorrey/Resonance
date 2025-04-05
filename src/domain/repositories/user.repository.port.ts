import { User } from '../entities/user';

export type CreateUserInput = Omit<User, 'id'>;
export type UpdateUserInput = Omit<User, 'id'>;

export interface UserRepositoryPort {
  create(input: CreateUserInput): Promise<User>;
}
