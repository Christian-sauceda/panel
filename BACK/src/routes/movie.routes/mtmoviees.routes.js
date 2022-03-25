import {
    Router
} from "express";
import * as movieESCtrl from '../../controllers/mtmovie.controllers/mtmoviees.controller';

const router = Router();

router.get('/', movieESCtrl.getmoviees);
router.get('/count/es', movieESCtrl.countmoviees);
router.get('/getmoviees/lastday', movieESCtrl.getmovieeslastday);
router.get('/:COD', movieESCtrl.getmovieesById);
router.post('/', movieESCtrl.createmoviees);
router.put('/:COD', movieESCtrl.updatemovieesById);
router.delete('/:COD', movieESCtrl.deletemovieesById);

export default router;