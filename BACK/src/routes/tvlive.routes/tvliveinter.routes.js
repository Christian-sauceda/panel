import {
    Router
} from "express";
import * as tvliveINTERCtrl from '../../controllers/tvlive.controllers/tvliveinter.controller';

const router = Router();

router.get('/', tvliveINTERCtrl.gettvliveinter);
router.get('/:COD', tvliveINTERCtrl.gettvliveinterById);
router.post('/', tvliveINTERCtrl.createtvliveinter);
router.put('/:COD', tvliveINTERCtrl.updatetvliveinterById);
router.delete('/:COD', tvliveINTERCtrl.deletetvliveinterById);

export default router;