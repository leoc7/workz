import { Router } from 'express';
import BoardController from './controllers/BoardController';
import ListController from './controllers/ListController';
import ItemController from './controllers/ItemController';

const router = Router();

router.get('/boards/', BoardController.index);
router.post('/boards/', BoardController.store);
router.delete('/boards/:id', BoardController.delete);

router.get('/lists/:boardId', ListController.index);
router.post('/lists/:boardId', ListController.store);
router.delete('/lists/:id', ListController.delete);

router.post('/items/:listId', ItemController.store);
router.delete('/items/:id', ItemController.delete);


export default router;
