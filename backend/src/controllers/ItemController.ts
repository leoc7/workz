import { Request, Response } from 'express';
import Item from '../models/Item';
import List from '../models/List';

class ItemController {
    public async store(req: Request, res: Response): Promise<Response> {
        const listId = req.params.listId;

        if (List.exists({ _id: listId })) {
            const list = await List.findById(listId);
            const item = await Item.create({
                ...req.body,
                list: req.params.listId,
            });

            list.items.push(item);
            await list.save();

            return res.json(item);
        }

        return res.status(404);
    }

    public async delete(req: Request, res: Response): Promise<void> {
        await Item.findByIdAndDelete(req.params.id);

        return res.status(200).end();
    }
}

export default new ItemController();
