const mysqlconnection = require("../../database");
const { downloadback, downloadposter } = require('../downloadimage.controllers/img.controllers');

// GET ALL CATALOG OF MOVIES EN
export const getmovieen = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_MOVIE_EN()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// GET CATALOG OF MOVIE EN BY ID
export const getmovieenById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_MOVIE_EN_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// CREATE CATALOG OF MOVIE EN
export const createmovieen = (req, res) => {
    const {
        CODAUDIO,
        CODQUALITY,
        CODCATEGORY,
        CODUSER,
        TITLE,
        BACK,
        POSTER,
        YEAR,
        CLASIF,
        DURATION,
        COUNTRY,
        CALIF,
        DIRECTOR,
        CAST,
        ASKPIN,
        CODFORMATVIDEO,
        URL,
        SYNOPSIS
    } = req.body;

    const urlimgback = req.body.BACK
    const nameimgback = req.body.TITLE + 'back.jpg';
    const urlimgposter = req.body.POSTER
    const nameimgposter = req.body.TITLE + 'poster.jpg';

    downloadback(urlimgback, nameimgback, function () {
        console.log('done');
    });

    // ruta de la imagen en el servidor
    const port = process.env.DOMINIO;
    const urlback = port + '/src/imgs/back/' + nameimgback;
    const urlposter = port + '/src/imgs/poster/' + nameimgposter;

    downloadposter(urlimgposter, nameimgposter, function () {
        console.log('done');
    });
    const query = `CALL PROC_INS_MOVIE_EN(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    mysqlconnection.query(query, [CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, urlback, urlposter,
            YEAR, CLASIF, DURATION, COUNTRY, CALIF, DIRECTOR, CAST, ASKPIN, CODFORMATVIDEO, URL, SYNOPSIS
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "MOVIE IN ENGLISH ADDED"
                });
            } else {
                console.log(req.body);
            }
        });
};

// UPDATE CATALOG OF MOVIE EN
export const updatemovieenById = (req, res) => {
    const {
        CODAUDIO,
        CODQUALITY,
        CODCATEGORY,
        CODUSER,
        TITLE,
        BACK,
        POSTER,
        YEAR,
        CLASIF,
        DURATION,
        COUNTRY,
        CALIF,
        DIRECTOR,
        CAST,
        ASKPIN,
        CODFORMATVIDEO,
        URL,
        SYNOPSIS
    } = req.body;
    const {
        COD
    } = req.params;
    mysqlconnection.query("CALL PROC_UPD_MOVIE_EN(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER, YEAR, CLASIF, DURATION, COUNTRY, CALIF,
            DIRECTOR, CAST, ASKPIN, CODFORMATVIDEO, URL, SUBT, SYNOPSIS, COD
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "MOVIE IN ENGLISH UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE CATALOG OF MOVIE EN
export const deletemovieenById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_MOVIE_EN(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "MOVIE IN ENGLISH DELETED"
                });
            } else {
                console.log(err);
            }
        });
};