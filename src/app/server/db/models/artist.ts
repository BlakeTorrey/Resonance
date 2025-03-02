import { Schema, model, type Document } from 'mongoose';

export interface ArtistDocument extends Document {
    artistId: string;
    artistName: string;
    image: string,
    link: string;
}

const artistSchema = new Schema<ArtistDocument>({
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


const Artist = model<ArtistDocument>('Artist', artistSchema);

export default Artist;