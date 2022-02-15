const mysqlconnection = require("../../database");

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
    const query = 'CALL PROC_INS_TVSHOW_ES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    mysqlconnection.query(query, [CODAUDIO, CODCATEGORY, CODUSER, TITLE, TITLE_LATIN, BACK,
            POSTER, YEAR, CLASIF, COUNTRY, CALIF, DIRECTOR, CAST, SYNOPSIS
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