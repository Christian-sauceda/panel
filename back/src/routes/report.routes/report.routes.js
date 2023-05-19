import {
    Router
} from "express";
import * as reportCtrl from '../../controllers/reports.controllers/report.controllers';

const router = Router();

router.get('/:ID', reportCtrl.getInforme);
router.get('/date/:ID/:DATE_INIT/:DATE_END', reportCtrl.getInformeDate);

export default router;