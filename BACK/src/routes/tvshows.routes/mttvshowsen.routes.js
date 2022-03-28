import {
    Router
} from "express";
import * as tvshowsENCtrl from '../../controllers/mttvshows.controllers/mttvshowsen.controller';

const router = Router();

router.get('/', tvshowsENCtrl.gettvshowsen);
router.get('/:COD', tvshowsENCtrl.gettvshowsenById);
router.get('/count/en', tvshowsENCtrl.countserieen);
router.get('/seltvshow/en', tvshowsENCtrl.getselecttvshowsen);
router.get('/getseriesen/lastday', tvshowsENCtrl.gettvshowsenlastday);
router.post('/', tvshowsENCtrl.createtvshowsen);
router.put('/:COD', tvshowsENCtrl.updatetvshowsenById);
router.delete('/:COD', tvshowsENCtrl.deletetvshowsenById);


export default router;