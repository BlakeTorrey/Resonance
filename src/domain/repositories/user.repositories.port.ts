import { User } from '../entities/user';

export type CreateUserInput = Omit<User, 'id'>;

export interface UserRepositoryPort {
    create(user: CreateUserInput): Promise<User>;
//     findById(id: string): Promise<User | null>;
//     findByEmail(email: string): Promise<User | null>;
//     updateUser(user: User): Promise<void>;
//     deleteUser(id: string): Promise<void>;
}