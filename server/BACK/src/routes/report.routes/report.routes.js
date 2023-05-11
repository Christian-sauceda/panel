import {
    Router
} from "express";
import * as reportCtrl from '../../controllers/reports.controllers/report.controllers';

const router = Router();

router.get('/reporte', reportCtrl.getInforme);

export default router;