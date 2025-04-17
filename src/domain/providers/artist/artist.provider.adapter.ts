import { ArtistProviderPort } from "./artist.provider.port";
import { ArtistRepositoryPort } from "@/domain/repositories/artist.repositories.port";
import { inject, singleton } from "tsyringe";

@singleton()
export class ArtistProviderAdapter implements ArtistProviderPort {
    constructor(
        @inject('ArtistRepositoryPort')
        private artistRepository: ArtistRepositoryPort) {}
    
        public async createArtist(): Promise<void> {
            await this.artistRepository.create({
                artistName: 'artistName',
                image: 'image',
                link: 'link',
            })
        }
}