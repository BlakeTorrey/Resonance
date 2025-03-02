import { Schema, model, type Document } from 'mongoose';

import { UserDocument } from './user';
import { EventDocument } from './event';

export interface IsavedEvents extends Document {
    userId: UserDocument['_id'];
    eventId: EventDocument['_id'];
}

const savedEventsSchema = new Schema<IsavedEvents>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        eventId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Event',
        },
    }
);

savedEventsSchema.index(
    { userId: 1, eventId: 1 },
    { unique: true }
);

const savedEvents = model<IsavedEvents>('SavedEvents', savedEventsSchema);

export default savedEvents;