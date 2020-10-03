import { Schema, Document, model } from 'mongoose';
import { IList } from './List';

export interface IItem extends Document {
    priority: number;
    title: string;
    description?: string;
    done: boolean;
    list: IList;
}

const ItemSchema = new Schema(
    {
        priority: Number,
        title: String,
        description: {
            type: String,
            required: false,
        },
        done: {
            type: Boolean,
            default: false,
        },
        list: {
            type: Schema.Types.ObjectId,
            ref: 'List',
        },
    },
    {
        timestamps: true,
    }
);

export default model<IItem>('Item', ItemSchema);
