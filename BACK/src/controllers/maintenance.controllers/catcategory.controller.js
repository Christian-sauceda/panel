const mysqlconnection = require("../../database");

// GET ALL CATALOG OF CATEGORY
export const getCatcategory = async (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_CAT_CATEGORY()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// GET CATALOG OF CATEGORY BY ID
export const getCatcategoryById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_CAT_CATEGORY_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// GET CATALOG OF CATEGORY BY TYPE
export const getCatcategoryByType = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_CAT_CATEGORY_TYPE(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// CREATE CATALOG OF CATEGORY
export const createcatcategory = (req, res) => {
    const {
        NAME,
        TYPE_CONTENT
    } = req.body;
    const query = `CALL PROC_INS_CAT_CATEGORY(?,?);`;
    mysqlconnection.query(query, [NAME, TYPE_CONTENT], (err, rows, fields) => {
        if (!err) {
            res.json({
                Status: "CATALOG OF CATEGORY ADDED"
            });
        } else {
            console.log(req.body);
        }
    });
};

// UPDATE CATALOG OF CATEGORY
export const updateCatcategoryById = (req, res) => {
    const {
        NAME,
        TYPE_CONTENT
    } = req.body;
    const {
        COD
    } = req.params;
    mysqlconnection.query("CALL PROC_UPD_CAT_CATEGORY(?,?,?)",
        [NAME, TYPE_CONTENT, COD], (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "CATALOG OF CATEGORY UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE CATALOG OF CATEGORY
export const deleteCatcategoryById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_CAT_CATEGORY(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "CATALOG OF CATEGORY DELETED"
                });
            } else {
                console.log(err);
            }
        });
};