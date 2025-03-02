import { Schema, model, type Document } from 'mongoose';

import { UserDocument } from './user';
import { ArtistDocument } from './artist';

export interface IsavedArtists extends Document {
    userId: UserDocument['_id'];
    artistId: ArtistDocument['_id'];
}

const savedArtistsSchema = new Schema<IsavedArtists>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        artistId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Artist',
        },
    }
);

savedArtistsSchema.index(
    { userId: 1, artistId: 1 },
    { unique: true }
);

const savedArtists = model<IsavedArtists>('SavedArtists', savedArtistsSchema);

export default savedArtists;
