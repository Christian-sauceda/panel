import bcrypt from "bcryptjs/dist/bcrypt";
import app from "../../app";
require("dotenv").config();
const bcryptjs = require("bcryptjs");
const mysqlconnection = require("../../database");
const jwt = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");


//signup
export const sign_up = (req, res, next) => {
    mysqlconnection.query(
        `SELECT COD_USER FROM SYS_USER WHERE USER_NAME = LOWER('${req.body.USER_NAME}')`,
        (err, result) => {
            if (result.length) {
                // error 
                return res.status(409).send({
                    message: "THIS USERNAME ALREADY EXIST",
                });
            } else { // username not in use
                bcrypt.hash(req.body.PASSWORD, 10, (err, hash) => {
                    if (err) {
                        throw err;
                        return res.status(500).send({
                            message: err,
                        });
                    } else {
                        mysqlconnection.query(`CALL PROC_INS_SYS_USER(?,?,?,?)`,
                            [req.body.USER_NAME, hash, req.body.TYPE, req.body.IND],
                            (err, result) => {
                                if (err) {
                                    throw err;
                                    return res.status(400).send({
                                        message: err,
                                    });
                                }
                                return res.status(201).send({
                                    message: "USER CREATED SUCCESSFULLY",
                                });
                            });
                    }
                });
            };
        });
};

//login
export const login = (req, res, next) => {
    mysqlconnection.query(
        `SELECT * FROM SYS_USER WHERE IND_USER = '1' AND USER_NAME = ${mysqlconnection.escape( req.body.USER_NAME )};`,
        (err, result) => {
            if (err) {
                throw err;
                return res.status(400).send({
                    message: err
                });
            }
            if (!result.length) {
                return res.status(400).send({
                    message: "USERNAME OR PASSWORD INCORRECT!",
                });
            }

            bcryptjs.compare(
                req.body.PASSWORD,
                result[0].PASSWORD,
                (bErr, bresult) => {
                    if (bErr) {
                        throw bErr;
                        return res.status(400).send({
                            message: "USERNAME OR PASSWORD INCORRECT!",
                        });
                    }
                    if (bresult) { //password correct
                        const token = jwt.sign({
                                COD: result[0].COD_USER,
                                NAME: result[0].USER_NAME,
                                TYPE: result[0].USER_TYPE,
                            },
                            "secret", {
                                expiresIn: "1m"
                            }
                        );
                        return res.status(200).send({
                            message: "LOGGED IN SUCCESSFULLY!",
                            COD: result[0].COD_USER,
                            NAME: result[0].USER_NAME,
                            TYPE: result[0].USER_TYPE,
                            token,
                        });
                    }
                    return res.status(401).send({
                        message: "USERNAME OR PASSWORD INCORRECT",
                    });
                }
            );
        }
    );
};

//logout
export const logout = (req, res, next) => {
    res.status(200).send({
        message: "LOGGED OUT SUCCESSFULLY!",
    });
};

//get a new accss token with a refresh token
export const refreshToken = (req, res, next) => {
    const token = req.body.token;
    if (!token) {
        return res.status(401).send({
            message: "UNAUTHORIZED",
        });
    }
    jwt.verify(token, "secret", (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "UNAUTHORIZED",
            });
        }
        const newToken = jwt.sign({
                COD: decoded.COD,
                NAME: decoded.NAME,
                TYPE: decoded.TYPE,
            },
            "secret", {
                expiresIn: "1m"
            }
        );
        return res.status(200).send({
            message: "TOKEN REFRESHED!",
            token: newToken,
        });
    });
}
