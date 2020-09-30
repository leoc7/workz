import { Request, Response } from 'express';
import List from '../models/List';

class ListController {
    public async index(req: Request, res: Response): Promise<Response> {
        console.log(req.params)
        const lists = await List.find({
            board: req.params.boardId,
        }).populate('items');

        return res.json(lists);
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const list = await List.create({
            ...req.body,
            board: req.params.boardId,
        });

        return res.json(list);
    }

    public async delete(req: Request, res: Response): Promise<void> {
        await List.findByIdAndDelete(req.params.id);

        return res.status(200).end();
    }
}

export default new ListController();
