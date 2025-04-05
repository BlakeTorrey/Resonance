import { DependencyContainer } from 'tsyringe';
import { UserProviderAdapter } from '../../domain/providers/user/user.provider.adapter';

export function setupProviderDependencyInjection(container: DependencyContainer): void {
  container.register('UserProviderPort', {
    useClass: UserProviderAdapter,
  });
}
