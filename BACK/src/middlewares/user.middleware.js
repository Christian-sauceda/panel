const jwt = require("jsonwebtoken");

module.exports = {
    validateRegister: (req, res, next) => {
        // USERNAME MIN LENGTH 6
        if (!req.body.USER_NAME || req.body.USER_NAME.length < 6) {
            return res.status(400).send({
                message: "PLEASE ENTER A USERNAME WITH AT LEAST 6 CHARACTERS",
            });
        }
        // CORREO VALIDATION
        if (!req.body.EMAIL_USER || !req.body.EMAIL_USER.includes("@")) {
            return res.status(400).send({
                message: "PLEASE ENTER A VALID EMAIL",
            });
        }
        // PASSWORD MIN LENGTH 6
        if (!req.body.PASSWORD || req.body.PASSWORD.length < 6) {
            return res.status(400).send({
                message: "PLEASE ENTER A PASSWORD WITH AT LEAST 6 CHARACTERS",
            });
        }
        // PASSWORD REPEAT
        if (!req.body.PASSWORDREPEAT || req.body.PASSWORD !== req.body.PASSWORDREPEAT) {
            return res.status(400).send({
                message: "BOTH PASSWORDS MUST MATCH",
            });
        }
        next();
    },
    isLoggedIn: (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(401).send({
                message: "UNAUTHORIZED",
            });
        }
        try {
            const authHeader = req.headers.authorization;
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, "secret");
            const userData = decoded;
            next();
        } catch (error) {
            throw error;
            return res.status(400).send({
                message: "YOUR ARE NOT LOGGED IN!",
            });
        }
    },
};