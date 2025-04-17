import { Schema, Types, model, type Document } from 'mongoose';


export interface IsavedArtists extends Document {
    userId: Types.ObjectId;
    artistId: Types.ObjectId;
}

const savedArtistsSchema = new Schema<IsavedArtists>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        artistId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    }
);

savedArtistsSchema.index(
    { userId: 1, artistId: 1 },
    { unique: true }
);

const savedArtists = model<IsavedArtists>('SavedArtists', savedArtistsSchema);

export { savedArtists} ;
