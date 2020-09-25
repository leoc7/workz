import { Router } from 'express';
import BoardController from './controllers/BoardController';

const router = Router();

router.get('/boards/', BoardController.index);
router.post('/boards/', BoardController.store);
router.delete('/boards/:id', BoardController.delete);

export default router;
