import {
    Router
} from "express";
import * as movieENCtrl from '../../controllers/mtmovie.controllers/mtmovieen.controller';

const router = Router();

router.get('/', movieENCtrl.getmovieen);
router.get('/:COD', movieENCtrl.getmovieenById);
router.get('/getmovieen/lastday', movieENCtrl.getmovieenlastday);
router.post('/', movieENCtrl.createmovieen);
router.put('/:COD', movieENCtrl.updatemovieenById);
router.delete('/:COD', movieENCtrl.deletemovieenById);

export default router;