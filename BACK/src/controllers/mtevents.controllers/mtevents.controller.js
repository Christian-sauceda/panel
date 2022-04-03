const mysqlconnection = require("../../database");

// GET ALL CATALOG OF MOVIE ADULT
export const getevents = async (req, res) => {
    const {
        COD
    } = req.body;
    mysqlconnection.query("CALL PROC_SEL_ALL_EVENT(?)", [COD], (err, rows, fields) => {
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
    mysqlconnection.query('CALL PROC_SEL_ALL_EVENT_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

export const countevent = async (req, res) => {
    mysqlconnection.query("CALL PROC_COUNTEVENT()" , (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// CREATE MOVIE ADULT
export const createevent = (req, res) => {
    const {
        CODAUDIO,
        CODCATEGORIA,
        CODCONTENIDO,
        CODUSER,
        TITLE,
        POSTER
    } = req.body;
    const query = `CALL PROC_INS_EVENT(?,?,?,?,?,?)`;
    mysqlconnection.query(query, [ CODAUDIO, CODCATEGORIA,CODCONTENIDO, 
    CODUSER, TITLE, POSTER ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "EVENT ADDED"
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
        CODCATEGORIA,
        CODCONTENIDO,
        CODUSER,
        TITLE,
        POSTER
    } = req.body;
    const {
        COD
    } = req.params;
    mysqlconnection.query("CALL PROC_UPD_EVENT(?,?,?,?,?,?,?)",
        [CODAUDIO, CODCATEGORIA, CODCONTENIDO,
        CODUSER, TITLE, POSTER, COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "EVENT UPDATED"
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
    mysqlconnection.query('CALL PROC_DEL_EVENT(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "EVENT DELETED"
                });
            } else {
                console.log(err);
            }
        });
};