import {
    Router
} from "express";
import * as userCtrl from "../../controllers/user.controllers/sysusersignup.controller";
const useMiddleware = require("../../middlewares/user.middleware");

const router = Router();

// resgisro de usuario
router.post("/registro", userCtrl.registro);
// confirmacion de correo
router.get("/confirmar/:token", userCtrl.confirmar);
// login
router.post("/login", userCtrl.login);

export default router;