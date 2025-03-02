import { Schema, type Document } from 'mongoose';

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

// might add in methods to remove events where the date has already passed.

export default eventSchema;