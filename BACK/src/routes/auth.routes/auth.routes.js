import {
    Router
} from "express";
import * as userCtrl from "../../controllers/user.controllers/sysusersignup.controller";
import checkAuth from "../../middlewares/user.middleware.js";

const router = Router();

// resgisro de usuario
router.post("/registro", userCtrl.registro);
// confirmacion de correo
router.get("/confirmar/:token", userCtrl.confirmar);
// login
router.post("/login", userCtrl.login);
//perfil
router.get("/perfil", checkAuth, userCtrl.perfil);

export default router;