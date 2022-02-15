import {
    Router
} from "express";
import * as tvshowsESCtrl from '../../controllers/mttvshows.controllers/mttvshowses.controller';

const router = Router();

router.get('/', tvshowsESCtrl.gettvshowses);
router.get('/:COD', tvshowsESCtrl.gettvshowsesById);
router.post('/', tvshowsESCtrl.createtvshowses);
router.put('/:COD', tvshowsESCtrl.updatetvshowsesById);
router.delete('/:COD', tvshowsESCtrl.deletetvshowsesById);

export default router;