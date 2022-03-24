import {
    Router
} from "express";
import * as movieadultCtrl from '../../controllers/mtmovie.controllers/mtmovieadult.controller';

const router = Router();

router.get('/', movieadultCtrl.getmovieadult);
router.get('/:COD', movieadultCtrl.getmovieadultById);
router.get('/getmovieadult/lastday', movieadultCtrl.getmovieadultlastday);
router.post('/', movieadultCtrl.createmovieadult);
router.put('/:COD', movieadultCtrl.updatemovieadultById);
router.delete('/:COD', movieadultCtrl.deletemovieadultById);

export default router;