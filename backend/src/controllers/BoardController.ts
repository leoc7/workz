import { Request, Response } from 'express';
import Board from '../models/Board';

class BoardController {
    public async index(req: Request, res: Response): Promise<Response> {
        const boards = await Board.find();

        return res.json(boards);
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const board = await Board.create(req.body);

        return res.json(board);
    }

    public async delete(req: Request, res: Response): Promise<void> {
        await Board.findByIdAndDelete(req.params.id);

        return res.status(200).end();
    }
}

export default new BoardController();
