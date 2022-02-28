import bcrypt from "bcryptjs/dist/bcrypt";
import app from "../../app";
const bcryptjs = require("bcryptjs");
const mysqlconnection = require("../../database");
const jwt = require("jsonwebtoken");
import generarId from "../../helpers/generarId";
import emailRegistro from "../../helpers/emailRegistro.js";

//registro de usuario
export const registro = async (req, res) => {
    try {
        const {
            EMAIL_USER,
            USER_NAME,
            TYPE
        } = req.body;
        //QUE NO EXISTA EL EMAIL
        mysqlconnection.query(`SELECT COD_USER FROM SYS_USER WHERE EMAIL_USER = LOWER('${EMAIL_USER}')`, (err, rows) => {
            if (err) {
                res.status(400).json({
                    message: "Error al consultar el usuario",
                    err
                });
            } else {
                if (rows.length > 0) {
                    res.status(400).json({
                        message: "El Usuario o Correo Ya Está Usado"
                    });
                } else {
                    //HASH DE LA CONTRASEÑA
                    bcrypt.hash(req.body.PASSWORD_USER, 10, (err, hash) => {
                        if (err) {
                            res.status(500).json({
                                message: "Error al encriptar la contraseña",
                                err
                            });
                        } else {
                            const tokenunico = generarId()
                            //INSERTAR USUARIO
                            mysqlconnection.query(`CALL PROC_INS_SYS_USER(?,?,?,?,?)`,
                                [USER_NAME, hash, TYPE, EMAIL_USER, tokenunico],
                                (err, rows) => {
                                    if (err) {
                                        res.status(500).json({
                                            message: "Error al insertar el usuario",
                                            err
                                        });
                                    } else {
                                        //enviar email

                                        res.status(200).json({
                                            message: "Usuario creado correctamente"
                                        });
                                        emailRegistro({
                                            EMAIL_USER,
                                            USER_NAME,
                                            tokenunico
                                        });

                                    }
                                });
                        }
                    });
                }
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al registrar el usuario",
            error
        });
    }
};

//confirmacion de correo
export const confirmar = async (req, res) => {
    const  { token } = req.params;

    mysqlconnection.query(`SELECT * FROM SYS_USER WHERE TOKEN = '${token}'`, (err, rows) => {
        if (err) {
            res.status(500).json({
                message: "Error al consultar el usuario",
                err
            });
        } else {
            if (rows.length > 0) {
                mysqlconnection.query(`UPDATE SYS_USER SET TOKEN = '', CONFIRMED = 1 WHERE TOKEN = '${token}'`, (err, rows) => {
                    if (err) {
                        res.status(500).json({
                            message: "Error al actualizar el usuario",
                            err
                        });
                    } else {
                        res.status(200).json({
                            message: "Usuario confirmado correctamente"
                        });
                    }
                });
            } else {
                res.status(400).json({
                    message: "El token no es valido"
                });
            }
        }
    });
};

//login
export const login = (req, res, next) => {
    mysqlconnection.query(
        `SELECT * FROM SYS_USER WHERE CONFIRMED = '1' AND USER_NAME = ${mysqlconnection.escape(req.body.USER_NAME)};`,
        (err, result) => {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            }
            if (!result.length) {
                return res.status(400).send({
                    message: "El usuario no existe o sin confirmar",
                });
            }
            bcryptjs.compare(
                req.body.PASSWORD,
                result[0].PASSWORD,
                (bErr, bresult) => {
                    if (bErr) {
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
                            expiresIn: "1h"
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

