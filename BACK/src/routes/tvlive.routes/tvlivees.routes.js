import {
    Router
} from "express";
import * as tvliveESCtrl from '../../controllers/tvlive.controllers/tvlivees.controller';

const router = Router();

router.get('/', tvliveESCtrl.gettvlivees);
router.get('/:COD', tvliveESCtrl.gettvliveesById);
router.post('/', tvliveESCtrl.createtvlivees);
router.put('/:COD', tvliveESCtrl.updatetvliveesById);
router.delete('/:COD', tvliveESCtrl.deletetvliveesById);

export default router;