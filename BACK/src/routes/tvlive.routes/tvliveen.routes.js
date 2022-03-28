import {
    Router
} from "express";
import * as tvliveENCtrl from '../../controllers/tvlive.controllers/tvliveen.controller';

const router = Router();

router.get('/', tvliveENCtrl.gettvliveen);
router.get('/selecttven', tvliveENCtrl.getselecttvliveen);
router.get('/:COD', tvliveENCtrl.gettvliveenById);
router.post('/', tvliveENCtrl.createtvliveen);
router.put('/:COD', tvliveENCtrl.updatetvliveenById);
router.delete('/:COD', tvliveENCtrl.deletetvliveenById);

export default router;