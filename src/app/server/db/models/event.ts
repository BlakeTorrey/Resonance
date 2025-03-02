import { Schema, model, type Document } from 'mongoose';

export interface EventDocument extends Document {
    eventId: string;
    eventName: string;
    description: string;
    date: Date;
}

const eventSchema = new Schema<EventDocument>({
    eventName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
});


const Event = model<EventDocument>('Event', eventSchema);

export default Event;