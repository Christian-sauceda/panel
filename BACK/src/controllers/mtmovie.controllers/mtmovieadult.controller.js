const mysqlconnection = require("../../database");
const { downloadmovieadultback, downloadmovieadultposter } = require('../downloadimage.controllers/img.controllers');

// GET ALL CATALOG OF MOVIE ADULT
export const getmovieadult = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_MOVIE_ADULT()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}


export const getmovieadultlastday = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_ADULTLASTDAY()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// GET MOVIE ADULT EN BY ID
export const getmovieadultById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_MOVIE_ADULT_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// CREATE MOVIE ADULT
export const createmovieadult = (req, res) => {
    const {
        CODAUDIO,
        CODQUALITY,
        CODCATEGORY,
        CODUSER,
        TITLE,
        BACK,
        POSTER,
        YEAR,
        DURATION,
        CODFORMATVIDEO,
        URL,
        SYNOPSIS
    } = req.body;

    const urlimgback = req.body.BACK
    const nameimgback = req.body.TITLE + 'back.jpg';
    const urlimgposter = req.body.POSTER
    const nameimgposter = req.body.TITLE + 'poster.jpg';

    downloadmovieadultback(urlimgback, nameimgback, function () {
        console.log('done');
    });

    // ruta de la imagen en el servidor
    const port = process.env.DOMINIO;
    const imagback = process.env.RUTAIMAGEMOVIEADULTBACK
    const imagposter = process.env.RUTAIMAGEMOVIEADULTPOSTER
    const urlback = port + imagback + nameimgback;
    const urlposter = port + imagposter + nameimgposter;

    downloadmovieadultposter(urlimgposter, nameimgposter, function () {
        console.log('done');
    });

    const query = `CALL PROC_INS_MOVIE_ADULT(?,?,?,?,?,?,?,?,?,?,?,?)`;
    mysqlconnection.query(query, [CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, urlback, urlposter, YEAR, DURATION,
            CODFORMATVIDEO, URL, SYNOPSIS
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "MOVIE ADULT ADDED"
                });
            } else {
                console.log(req.body);
            }
        });
};

// UPDATE MOVIE ADULT
export const updatemovieadultById = (req, res) => {
    const {
        CODAUDIO,
        CODQUALITY,
        CODCATEGORY,
        CODUSER,
        TITLE,
        BACK,
        POSTER,
        YEAR,
        DURATION,
        CODFORMATVIDEO,
        URL,
        SYNOPSIS
    } = req.body;
    const {
        COD
    } = req.params;
    mysqlconnection.query("CALL PROC_UPD_MOVIE_ADULT(?,?,?,?,?,?,?,?,?,?,?,?)",
        [CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER, YEAR, DURATION,
            CODFORMATVIDEO, URL, SYNOPSIS, COD
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "MOVIE ADULT UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE MOVIE ADULT
export const deletemovieadultById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_MOVIE_ADULT(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "MOVIE ADULT DELETED"
                });
            } else {
                console.log(err);
            }
        });
};