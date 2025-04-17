import { ArtistRepositoryPort, CreateArtistInput } from "@/domain/repositories/artist.repositories.port";
import { Artist } from "@/domain/entities/artist";
import { ArtistDocument, artistSchema } from "./artist.schema";
import { Model, Mongoose } from 'mongoose';

class ArtistRepositoryAdapter implements ArtistRepositoryPort {
    private model: Model<ArtistDocument>

    constructor(model: Model<ArtistDocument>) {
        this.model = model;
    }

    public async create(input: CreateArtistInput): Promise<Artist> {
        // placeholder code for creating an artist page in the DB
        const { artistName, image, link } = input;

        const artistDocument = await this.model.create(input);
        
        return this.toObject(artistDocument);
    }

    protected toObject(document: ArtistDocument): Artist {
        return {
            id: document._id.toHexString(),
            artistName: document.artistName,
            image: document.image,
            link: document.link,
        }
    }
}

const getArtistRepositoryInstance = (mongoose: Mongoose): ArtistRepositoryAdapter =>
    new ArtistRepositoryAdapter(mongoose.model<ArtistDocument>('Artist', artistSchema));

export { ArtistRepositoryAdapter, getArtistRepositoryInstance };