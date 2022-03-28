const mysqlconnection = require("../../database");

// GET ALL CATALOG OF TV LIVE EN
export const gettvliveen = (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_LIVE_EN()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

export const getselecttvliveen = (req, res) => {
    mysqlconnection.query("CALL PROC_SELECT_CAT_CATEGORY_TVEN()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// GET CATALOG OF TV LIVE EN BY ID
export const gettvliveenById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_LIVE_EN_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// CREATE CATALOG OF TV LIVE EN
export const createtvliveen = (req, res) => {
    const {
        COD_EPG_CHANNEL,
        COD_CATEGORY,
        COD_SERVER,
        COD_USER,
        COD_CHANNEL_EPG,
        COD_SERVER_EPG,
        COD_EPG,
        TITLE,
        POSTER,
        URL,
        SERVER_EPG,
        EPG_NOW,
        EPG_NEXT,
        STATTUS,
        ORDER_LIVE_TV,
        ICON,
        COD_CONTENIDO
    } = req.body;
    const query = 'CALL PROC_INS_LIVETV_EN(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    mysqlconnection.query(query, [COD_EPG_CHANNEL, COD_CATEGORY, COD_SERVER, COD_USER, COD_CHANNEL_EPG, COD_SERVER_EPG,
        COD_EPG, TITLE, POSTER, URL, SERVER_EPG, EPG_NOW, EPG_NEXT, STATTUS, ORDER_LIVE_TV, ICON, COD_CONTENIDO
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV LIVE IN ENGLISH ADDED"
                });
            } else {
                console.log(req.body);
            }
        });
};

// UPDATE CATALOG OF TV LIVE EN
export const updatetvliveenById = (req, res) => {
    const {
        COD_EPG_CHANNEL,
        COD_CATEGORY,
        COD_SERVER,
        COD_USER,
        COD_CHANNEL_EPG,
        COD_SERVER_EPG,
        COD_EPG,
        TITLE,
        POSTER,
        URL,
        SERVER_EPG,
        EPG_NOW,
        EPG_NEXT,
        STATTUS,
        ORDER_LIVE_TV,
        ICON
    } = req.body;
    const {
        COD
    } = req.params;
    mysqlconnection.query("CALL PROC_UPD_LIVETV_EN(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [COD_EPG_CHANNEL, COD_CATEGORY, COD_SERVER, COD_USER, COD_CHANNEL_EPG, COD_SERVER_EPG,
            COD_EPG, TITLE, POSTER, URL, SERVER_EPG, EPG_NOW, EPG_NEXT, STATTUS, ORDER_LIVE_TV, ICON, COD
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV LIVE IN ENGLISH UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE CATALOG OF TV LIVE EN
export const deletetvliveenById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_LIVETV_EN(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV LIVE IN ENGLISH DELETED"
                });
            } else {
                console.log(err);
            }
        });
};