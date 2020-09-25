import { Schema, Document, model } from 'mongoose';
import { IItem } from './Item';

export interface IList extends Document {
    title: string;
    description?: string;
    items: IItem[];
}

const ListSchema = new Schema({
    title: String,
    description: String,
    board: {
        type: Schema.Types.ObjectId,
        ref: 'Board',
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item',
        },
    ],
});

export default model<IList>('List', ListSchema);
