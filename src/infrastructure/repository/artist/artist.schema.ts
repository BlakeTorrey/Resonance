import { Schema, Types, model, type Document } from 'mongoose';
import { Artist } from '@/domain/entities/artist';

export interface ArtistDocument extends Document, Omit<Artist, 'id'> {
    _id: Types.ObjectId;
}


export const artistSchema = new Schema<ArtistDocument>({
    artistName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    }
});


