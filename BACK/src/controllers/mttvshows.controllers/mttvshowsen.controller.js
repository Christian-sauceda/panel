const mysqlconnection = require("../../database");

// GET ALL CATALOG OF TV SHOWS EN
export const gettvshowsen = (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_TVSHOW_EN()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// GET CATALOG OF TV SHOW EN BY ID
export const gettvshowsenById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_TVSHOW_EN_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// CREATE CATALOG OF TV SHOW EN
export const createtvshowsen = (req, res) => {
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
    const query = 'CALL PROC_INS_TVSHOW_EN(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    mysqlconnection.query(query, [CODAUDIO, CODCATEGORY, CODUSER, TITLE, TITLE_LATIN, BACK,
            POSTER, YEAR, CLASIF, COUNTRY, CALIF, DIRECTOR, CAST, SYNOPSIS
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV SHOW IN ENGLISH ADDED"
                });
            } else {
                console.log(req.body);
            }
        });
};

// UPDATE CATALOG OF TV SHOW EN
export const updatetvshowsenById = (req, res) => {
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
    mysqlconnection.query("CALL PROC_UPD_TVSHOW_EN(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [CODAUDIO, CODCATEGORY, CODUSER, TITLE, TITLE_LATIN, BACK, POSTER,
            YEAR, CLASIF, COUNTRY, CALIF, DIRECTOR, CAST, SYNOPSIS, COD
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV SHOW IN ENGLISH UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE CATALOG OF TV SHOW EN
export const deletetvshowsenById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_TVSHOW_EN(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV SHOW IN ENGLISH DELETED"
                });
            } else {
                console.log(err);
            }
        });
};