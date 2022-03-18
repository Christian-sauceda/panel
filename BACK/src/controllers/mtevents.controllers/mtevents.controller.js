const mysqlconnection = require("../../database");

// GET ALL CATALOG OF MOVIE ADULT
export const getevent = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_MOVIE_ADULT()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// GET MOVIE ADULT EN BY ID
export const geteventById = (req, res) => {
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
export const createevent = (req, res) => {
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
    const query = `CALL PROC_INS_MOVIE_ADULT(?,?,?,?,?,?,?,?,?,?,?,?)`;
    mysqlconnection.query(query, [CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER, YEAR, DURATION,
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
export const updateeventById = (req, res) => {
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
export const deleteeventById = (req, res) => {
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