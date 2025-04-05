import { inject, singleton } from 'tsyringe';
import { UserRepositoryPort } from '../../repositories/user.repository.port';
import { UserProviderPort } from './user.provider.port';

@singleton()
class UserProviderAdapter implements UserProviderPort {
  constructor(
    @inject('UserRepositoryPort')
    private userRepository: UserRepositoryPort,
  ) {}

  public async createUser(): Promise<void> {
    await this.userRepository.create({
      username: 'username',
      password: 'password',
      email: 'email',
      emailUpdates: false,
    });
  }
}

export { UserProviderAdapter };
