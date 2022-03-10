import {
    Router
} from "express";
import * as userCtrl from "../../controllers/user.controllers/sysusersignup.controller";
const useMiddleware = require("../../middlewares/user.middleware");

const router = Router();

// sign-up
router.post("/signup", useMiddleware.validateRegister, userCtrl.sign_up);

// login
router.post("/login", userCtrl.login);

export default router;