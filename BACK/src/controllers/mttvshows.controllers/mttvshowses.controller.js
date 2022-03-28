const mysqlconnection = require("../../database");
const { downloadserieesback, downloadserieesposter } = require('../downloadimage.controllers/img.controllers');

// GET ALL CATALOG OF TV SHOWS ES
export const gettvshowses = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_TVSHOW_ES()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

export const getselecttvshowses = async (req, res) => {
    mysqlconnection.query("CALL PROC_SELECT_TVSHOW_ES()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

export const gettvshowseslastday = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_SERIESESLASTDAY()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}


// GET CATALOG OF TV SHOW ES BY ID
export const gettvshowsesById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_TVSHOW_ES_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

export const countseriees = async (req, res) => {
    mysqlconnection.query("CALL PROC_COUNTSERIEES()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// CREATE CATALOG OF TV SHOW ES
export const createtvshowses = (req, res) => {
    const {
        CODAUDIO,
        CODCATEGORY,
        CODUSER,
        TITLE,
        TITLE_LATIN,
        BACK,
        POSTER,
        YEAR,
        CLASIF,
        COUNTRY,
        CALIF,
        DIRECTOR,
        CAST,
        SYNOPSIS
    } = req.body;

    const urlimgback = req.body.BACK
    const nameimgback = req.body.TITLE + 'back.jpg';
    const urlimgposter = req.body.POSTER
    const nameimgposter = req.body.TITLE + 'poster.jpg';

    downloadserieesback(urlimgback, nameimgback, function () {
        console.log('done');
    });

    // ruta de la imagen en el servidor
    const port = process.env.DOMINIO;
    const imagback = process.env.RUTAIMAGESERIEESBACK
    const imagposter = process.env.RUTAIMAGESERIEESPOSTER
    const urlback = port + imagback + nameimgback;
    const urlposter = port + imagposter + nameimgposter;

    downloadserieesposter(urlimgposter, nameimgposter, function () {
        console.log('done');
    });

    const query = 'CALL PROC_INS_TVSHOW_ES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    mysqlconnection.query(query, [CODAUDIO, CODCATEGORY, CODUSER, TITLE, TITLE_LATIN, urlback,
        urlposter, YEAR, CLASIF, COUNTRY, CALIF, DIRECTOR, CAST, SYNOPSIS
    ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV SHOW IN SPANISH ADDED"
                });
            } else {
                console.log(req.body);
            }
        });
};

// UPDATE CATALOG OF TV SHOW ES
export const updatetvshowsesById = (req, res) => {
    const {
        CODAUDIO,
        CODCATEGORY,
        CODUSER,
        TITLE,
        TITLE_LATIN,
        BACK,
        POSTER,
        YEAR,
        CLASIF,
        COUNTRY,
        CALIF,
        DIRECTOR,
        CAST,
        SYNOPSIS
    } = req.body;
    const {
        COD
    } = req.params;
    mysqlconnection.query("CALL PROC_UPD_TVSHOW_ES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [CODAUDIO, CODCATEGORY, CODUSER, TITLE, TITLE_LATIN, BACK, POSTER,
            YEAR, CLASIF, COUNTRY, CALIF, DIRECTOR, CAST, SYNOPSIS, COD
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV SHOW IN SPANISH UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE CATALOG OF TV SHOW ES
export const deletetvshowsesById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_TVSHOW_ES(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV SHOW IN SPANISH DELETED"
                });
            } else {
                console.log(err);
            }
        });
};