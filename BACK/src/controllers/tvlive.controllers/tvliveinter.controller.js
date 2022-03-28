const mysqlconnection = require("../../database");

// GET ALL CATALOG OF TV LIVE INTERNACIONAL
export const gettvliveinter = (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_LIVE_INTER()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

export const getselecttvliveinter = (req, res) => {
    mysqlconnection.query("CALL PROC_SELECT_CAT_CATEGORY_TVINTER()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}
// GET CATALOG OF TV LIVE INTERNACIONAL BY ID
export const gettvliveinterById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_LIVE_INTER_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// CREATE CATALOG OF TV LIVE INTERNACIONAL
export const createtvliveinter = (req, res) => {
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
    const query = 'CALL PROC_INS_LIVETV_INTER(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    mysqlconnection.query(query, [COD_EPG_CHANNEL, COD_CATEGORY, COD_SERVER, COD_USER, COD_CHANNEL_EPG, COD_SERVER_EPG,
        COD_EPG, TITLE, POSTER, URL, SERVER_EPG, EPG_NOW, EPG_NEXT, STATTUS, ORDER_LIVE_TV, ICON, COD_CONTENIDO
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV LIVE INTERNACIONAL ADDED"
                });
            } else {
                console.log(req.body);
            }
        });
};

// UPDATE CATALOG OF TV LIVE INTERNACIONAL
export const updatetvliveinterById = (req, res) => {
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
    mysqlconnection.query("CALL PROC_UPD_LIVETV_INTER(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [COD_EPG_CHANNEL, COD_CATEGORY, COD_SERVER, COD_USER, COD_CHANNEL_EPG, COD_SERVER_EPG,
            COD_EPG, TITLE, POSTER, URL, SERVER_EPG, EPG_NOW, EPG_NEXT, STATTUS, ORDER_LIVE_TV, ICON, COD
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV LIVE INTERNACIONAL UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE CATALOG OF TV LIVE EN
export const deletetvliveinterById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_LIVETV_INTER(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV LIVE INTERNACIONAL DELETED"
                });
            } else {
                console.log(err);
            }
        });
};