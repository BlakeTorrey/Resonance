import { Schema,Types, model, type Document } from 'mongoose';


export interface IsavedEvents extends Document {
    userId: Types.ObjectId;
    eventId: Types.ObjectId;
}

const savedEventsSchema = new Schema<IsavedEvents>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        eventId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    }
);

savedEventsSchema.index(
    { userId: 1, eventId: 1 },
    { unique: true }
);

const savedEvents = model<IsavedEvents>('SavedEvents', savedEventsSchema);

export { savedEvents };