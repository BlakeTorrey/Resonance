import { Artist } from "../entities/artist";

export type CreateArtistInput = Omit<Artist, 'id'>;

export interface ArtistRepositoryPort {
    create(artist:  CreateArtistInput): Promise<Artist>;
    // further functions
}