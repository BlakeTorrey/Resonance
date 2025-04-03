import { container, DependencyContainer, InjectionToken, ValueProvider } from 'tsyringe';

import { setupRepositoriesDependencyInjection } from './dependency-registries/repositories';

export class DependencyRegistry {
  public container: DependencyContainer;

  constructor() {
    const childContainer = container.createChildContainer();

    setupRepositoriesDependencyInjection(childContainer);

    this.container = childContainer;
  }

  resolve<T>(token: InjectionToken<T>): T {
    return this.container.resolve(token);
  }

  register<T>(token: InjectionToken<T>, provider: ValueProvider<T>): void {
    this.container.register<T>(token, provider);
  }

  registerInstance<T>(token: InjectionToken<T>, instance: T): void {
    this.container.registerInstance(token, instance);
  }

  clearInstances(): void {
    container.clearInstances();
    this.container.clearInstances();
  }
}

let dependencyRegistry: DependencyRegistry;

export const getDependencyRegistryInstance = (): DependencyRegistry => {
  if (!dependencyRegistry) {
    dependencyRegistry = new DependencyRegistry();
  }

  return dependencyRegistry;
};
