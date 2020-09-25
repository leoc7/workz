import { Schema, Document, model } from 'mongoose';

export interface IBoard extends Document {
    title: string;
    description?: string;
}

const BoardSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

export default model<IBoard>('Board', BoardSchema);
