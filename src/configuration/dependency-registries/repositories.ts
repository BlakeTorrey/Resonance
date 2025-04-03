import { Mongoose } from 'mongoose';
import { DependencyContainer, instanceCachingFactory } from 'tsyringe';

import { createMongoose } from '../mongoose';

export function setupRepositoriesDependencyInjection(container: DependencyContainer): void {
  container.register(Mongoose, {
    useFactory: instanceCachingFactory(() => createMongoose()),
  });
}
