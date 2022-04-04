import {
    Router
} from "express";
import * as eventCtrl from '../../controllers/mtevents.controllers/mtevents.controller';

const router = Router();

router.get('/', eventCtrl.getevents);
router.get('/:COD', eventCtrl.geteventById);
router.get('/count/event', eventCtrl.countevent);
router.get('/selevent/es', eventCtrl.getselectevent);
router.post('/', eventCtrl.createevent);
router.put('/:COD', eventCtrl.updateeventById);
router.delete('/:COD', eventCtrl.deleteeventById);

export default router;