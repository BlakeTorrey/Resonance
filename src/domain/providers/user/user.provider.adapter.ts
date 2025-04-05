import { UserProviderPort } from "./user.provider.port";
import { UserRepositoryPort } from '../../repositories/user.repositories.port';
import { inject, singleton } from "tsyringe";

@singleton()
export class UserProviderAdapter implements UserProviderPort {
    constructor(
        @inject('UserRepositoryPort')
        private userRepository: UserRepositoryPort) {}

    public async createUser(): Promise<void> {
        await this.userRepository.create({
            username: 'username',
            password: 'password',
            email: 'email',
            emailUpdates: false,
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

}


