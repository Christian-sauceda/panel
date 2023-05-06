import app from "../../app";
const bcryptjs = require("bcryptjs");
const mysqlconnection = require("../../database");
const jwt = require("jsonwebtoken");
import generarId from "../../helpers/generarId";
import emailRegistro from "../../helpers/emailRegistro.js";


// get all users
export const getuser = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_USERS()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//registro de usuario
export const registro = async (req, res) => {
    try {
        const { EMAIL_USER, PASSWORD_USER, USER_NAME, TYPE } = req.body;
        //QUE NO EXISTA EL EMAIL
        mysqlconnection.query(`SELECT COD_USER FROM SYS_USER WHERE EMAIL_USER = LOWER('${EMAIL_USER}')`, (err, rows) => {
            if (err) {
                res.status(400).json({
                    message: "Error al Consultar el Usuario",
                    err
                });
            } else {
                if (rows.length > 0) {
                    res.status(400).json({
                        message: "El Usuario o Correo Ya Está en Uso"
                    });
                } else {
                    //HASH DE LA CONTRASEÑA
                    bcryptjs.hash(PASSWORD_USER, 10, (err, hash) => {
                        if (err) {
                            res.status(500).json({
                                message: "Error al Encriptar la Contraseña",
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
                                            message: "Error al Insertar el Usuario",
                                            err
                                        });
                                    } else {
                                        res.status(200).json({
                                            message: "Usuario Creado Correctamente"
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
            message: "Error al Registrar el Usuario",
            error
        });
    }
};

//confirmacion de correo
export const confirmar = async (req, res) => {
    const { token } = req.params;
    mysqlconnection.query(`SELECT * FROM SYS_USER WHERE TOKEN = '${token}'`, (err, rows) => {
        if (err) {
            res.status(500).json({
                message: "Error al Consultar el Usuario",
                err
            });
        } else {
            if (rows.length > 0) {
                mysqlconnection.query(`UPDATE SYS_USER SET TOKEN = '', CONFIRMED = 1 WHERE TOKEN = '${token}'`, (err, rows) => {
                    if (err) {
                        res.status(500).json({
                            message: "Error al Actualizar el Usuario",
                            err
                        });
                    } else {
                        res.status(200).json({
                            message: "Usuario Confirmado Correctamente"
                        });
                    }
                });
            } else {
                res.status(400).json({
                    message: "El Token no es Válido"
                });
            }
        }
    });
};

//login
export const login = (req, res, next) => {
    const usuario = mysqlconnection.query(
        `SELECT * FROM SYS_USER WHERE CONFIRMED = '1' AND USER_NAME = ${mysqlconnection.escape(req.body.USER_NAME)};`,
        (err, result) => {
            if (err) {
                return res.status(403).send({
                    message: err
                });
            }
            if (!result.length) {
                return res.status(404).send({
                    message: "El Usuario no Existe o Sin Confirmar",
                });
            }
            bcryptjs.compare(
                req.body.PASSWORD,
                result[0].PASSWORD,
                (bErr, bresult) => {
                    if (bErr) {
                        return res.status(403).send({
                            message: "Nombre o Contraseña Incorrecta!!",
                        });
                    }
                    if (bresult) { //password correct
                        const token = jwt.sign({
                            COD: result[0].COD_USER,
                            NAME: result[0].USER_NAME,
                            TYPE: result[0].TYPE_USER,
                        },
                            "secret", {
                            expiresIn: "8h"
                        }
                        );
                        return res.json({
                            message: "LOGGED IN SUCCESSFULLY!",
                            COD: result[0].COD_USER,
                            NAME: result[0].USER_NAME,
                            TYPE: result[0].TYPE_USER,
                            token,
                        });
                    }
                    return res.status(401).send({
                        message: "Nombre o Contraseña Incorrecta!!",
                    });
                }
            );
        }
    );
};

//perfil
export const perfil = (req, res) => {
    const { user } = req;
    res.json(user);
};
