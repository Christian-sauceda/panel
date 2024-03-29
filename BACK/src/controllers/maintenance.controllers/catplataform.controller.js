const mysqlconnection = require("../../database");

// GET ALL CATALOG OF PLATAFORM
export const getCatPlataform = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_CAT_PLATAFORM()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// GET CATALOG OF PLATAFORM BY ID
export const getCatPlataformById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_CAT_PLATAFORM_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// CREATE CATALOG OF PLATAFORM
export const createCatPlataform = (req, res) => {
    const {
        NAME_PLATAFORM
    } = req.body;
    const query = `CALL PROC_INS_CAT_PLATAFORM(?);`;
    mysqlconnection.query(query, [NAME_PLATAFORM], (err, rows, fields) => {
        if (!err) {
            res.json({
                Status: "CATALOG OF PLATAFORM ADDED"
            });
        } else {
            console.log(req.body);
        }
    });
};

// UPDATE CATALOG OF PLATAFORM
export const updateCatPlataformById = (req, res) => {
    const {
        NAME_PLATAFORM
    } = req.body;
    const {
        COD
    } = req.params;
    mysqlconnection.query("CALL PROC_UPD_CAT_PLATAFORM(?,?)",
        [NAME_PLATAFORM, COD], (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "CATALOG OF PLATAFORM UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE CATALOG OF PLATAFORM
export const deleteCatPlataformById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_CAT_PLATAFORM(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "CATALOG OF PLATAFORM DELETED"
                });
            } else {
                console.log(err);
            }
        });
};