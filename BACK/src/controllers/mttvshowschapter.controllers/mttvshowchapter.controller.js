const mysqlconnection = require("../../database");

// GET ALL CHAPTERS BY TV SHOW
export const getchapterBytvShow = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query(
        "CALL PROC_SEL_CHAPTER_TVSHOW(?)",
        [COD],
        (err, rows, fields) => {
            if (!err) {
                res.status(200).json(rows[0]);
            } else {
                console.log(err);
            }
        }
    );
};

// GET ALL CHAPTER BY COD
export const getchapterByChapter = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query(
        "CALL PROC_SEL_CHAPTER_CHAPTER(?)",
        [COD],
        (err, rows, fields) => {
            if (!err) {
                res.status(200).json(rows[0]);
            } else {
                console.log(err);
            }
        }
    );
};

// CREATE CHAPTER FOR TV SHOW
export const createtvshowChapter = (req, res) => {
    const {
        COD_CONTENT,
        COD_FORMAT_VIDEO,
        COD_USER,
        NAME_CHAPTER,
        NUMBER_SEASON,
        NUMBER_CHAPTER,
        SYNOSIS,
        SUPTITLE,
        URL,
    } = req.body;
    const query = "CALL PROC_INS_CHAPTER(?,?,?,?,?,?,?,?,?)";
    mysqlconnection.query(
        query,
        [
            COD_CONTENT,
            COD_FORMAT_VIDEO,
            COD_USER,
            NAME_CHAPTER,
            NUMBER_SEASON,
            NUMBER_CHAPTER,
            SYNOSIS,
            SUPTITLE,
            URL,
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "CHAPTER FOR TV SHOW ADDED",
                });
            } else {
                console.log(req.body);
            }
        }
    );
};

// UPDATE CHAPTER FOR TV SHOW
export const updatetvshowsChapterById = (req, res) => {
    const {
        COD_CONTENT,
        NAME_CHAPTER,
        NUMBER_SEASON,
        NUMBER_CHAPTER,
        COD_FORMAT_VIDEO,
        COD_USER,
        SYNOSIS,
        URL,
        SUPTITLE,
    } = req.body;
    const {
        COD
    } = req.params;
    mysqlconnection.query(
        "CALL PROC_UPD_CHAPTER(?,?,?,?,?,?,?,?,?,?)",
        [
            COD_CONTENT,
            NAME_CHAPTER,
            NUMBER_SEASON,
            NUMBER_CHAPTER,
            COD_FORMAT_VIDEO,
            COD_USER,
            SYNOSIS,
            URL,
            SUPTITLE,
            COD,
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "CHAPTER FOR TV SHOW UPDATED",
                });
            } else {
                console.log(err);
            }
        }
    );
};

// DELETE CHAPTER FOR TV SHOW
export const deletetvshowsChapterById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query(
        "CALL PROC_DEL_CHAPTER(?)",
        [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "CHAPTER FOR TV SHOW DELETED",
                });
            } else {
                console.log(err);
            }
        }
    );
};