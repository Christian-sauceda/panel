const mysqlconnection = require("../../database");


// GET ALL CATALOG OF MOVIES
export const getmoviees = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_MOVIE_ES()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// GET CATALOG OF MOVIE BY ID
export const getmovieesById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_MOVIE_ES_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// CREATE CATALOG OF MOVIE
export const createmoviees = (req, res) => {
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
        SUBT,
        SYNOPSIS
    } = req.body;
    const query = `CALL PROC_INS_MOVIE_ES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    mysqlconnection.query(query, [CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER,
            YEAR, CLASIF, DURATION, COUNTRY, CALIF, DIRECTOR, CAST, ASKPIN, CODFORMATVIDEO, URL, SUBT, SYNOPSIS
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "MOVIE IN SPANISH ADDED"
                });
            } else {
                console.log(req.body);
            }
        });
};

// UPDATE CATALOG OF MOVIE
export const updatemovieesById = (req, res) => {
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
        SUBT,
        SYNOPSIS
    } = req.body;
    const {
        COD
    } = req.params;
    mysqlconnection.query("CALL PROC_UPD_MOVIE_ES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER, YEAR, CLASIF, DURATION, COUNTRY, CALIF,
            DIRECTOR, CAST, ASKPIN, CODFORMATVIDEO, URL, SUBT, SYNOPSIS, COD
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "MOVIE IN SPANISH UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE CATALOG OF MOVIE
export const deletemovieesById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_MOVIE_ES(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "MOVIE IN SPANISH DELETED"
                });
            } else {
                console.log(err);
            }
        });
};