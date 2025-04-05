import { Mongoose } from 'mongoose';
import { DependencyContainer, instanceCachingFactory } from 'tsyringe';

import { getUserRepositoryInstance } from '../../infrastructure/repositories/user/user.repository.adapter';
import { createMongoose } from '../mongoose';

export function setupRepositoriesDependencyInjection(container: DependencyContainer): void {
  container.register(Mongoose, {
    useFactory: instanceCachingFactory(() => createMongoose()),
  });

  container.register('UserRepositoryPort', {
    useFactory: instanceCachingFactory(() => getUserRepositoryInstance(container.resolve(Mongoose))),
  });
}
