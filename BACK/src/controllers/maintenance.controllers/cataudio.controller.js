const mysqlconnection = require("../../database");

// GET ALL CATALOG OF AUDIO
export const getCataudio = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_CAT_AUDIO()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// GET CATALOG OF AUDIO BY ID
export const getCataudioById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_CAT_AUDIO_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// CREATE CATALOG OF AUDIO
export const createCataudio = (req, res) => {
    const {
        NAME
    } = req.body;
    const query = `CALL PROC_INS_CAT_AUDIO(?);`;
    mysqlconnection.query(query, [NAME], (err, rows, fields) => {
        if (!err) {
            res.json({
                Status: "CATALOG OF AUDIO ADDED"
            });
        } else {
            console.log(req.body);
        }
    });
};

// UPDATE CATALOG OF AUDIO
export const updateCataudioById = (req, res) => {
    const {
        NAME
    } = req.body;
    const {
        COD
    } = req.params;
    mysqlconnection.query(
        "CALL PROC_UPD_CAT_AUDIO(?,?)",
        [NAME, COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "CATALOG OF AUDIO UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE CATALOG OF AUDIO
export const deleteCataudioById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_CAT_AUDIO(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "CATALOG OF AUDIO DELETED"
                });
            } else {
                console.log(err);
            }
        });
};