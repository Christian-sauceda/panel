const mysqlconnection = require("../../database");

// GET ALL CATALOG OF FORMAT VIDEO
export const getCatformartvideo = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_CAT_FORMAT_VIDEO()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// GET CATALOG OF FORMAT VIDEO BY ID
export const getCatformartvideoById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_CAT_FORMAT_VIDEO_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// CREATE CATALOG OF FORMAT VIDEO
export const createCatformartvideo = (req, res) => {
    const {
        NAME_FORMAT
    } = req.body;
    const query = `CALL PROC_INS_CAT_FORMAT_VIDEO(?);`;
    mysqlconnection.query(query, [NAME_FORMAT], (err, rows, fields) => {
        if (!err) {
            res.json({
                Status: "CATALOG OF FORMAT VIDEO ADDED"
            });
        } else {
            console.log(req.body);
        }
    });
};

// UPDATE CATALOG OF FORMAT VIDEO
export const updateCatformartvideoById = (req, res) => {
    const {
        NAME_FORMAT
    } = req.body;
    const {
        COD
    } = req.params;
    mysqlconnection.query("CALL PROC_UPD_CAT_FORMAT_VIDEO(?,?)",
        [NAME_FORMAT, COD], (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "CATALOG OF FORMAT VIDEO UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE CATALOG OF FORMAT VIDEO
export const deleteCatformartvideoById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_CAT_FORMAT_VIDEO(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "CATALOG OF FORMAT VIDEO DELETED"
                });
            } else {
                console.log(err);
            }
        });
};