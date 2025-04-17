import { Mongoose } from "mongoose";
import { DependencyContainer, instanceCachingFactory } from "tsyringe";
import { createMongoose } from "../mongoose";
import { getUserRepositoryInstance } from "@/infrastructure/repository/user/user.repository.adapter";
import instance from "tsyringe/dist/typings/dependency-container";
import { getArtistRepositoryInstance } from "@/infrastructure/repository/artist/artist.repository.adapter";


export function setupRepositoriesDependencyInjection(container: DependencyContainer): void {
    container.register(Mongoose, {
        useFactory: instanceCachingFactory(() => createMongoose()),
    });

    container.register('UserRepositoryPort', {
        useFactory: instanceCachingFactory(() => getUserRepositoryInstance(container.resolve(Mongoose))),
    });

    container.register('ArtistRepositoryPort', {
        useFactory: instanceCachingFactory(() => getArtistRepositoryInstance(container.resolve(Mongoose))),
    });
}

