const mysqlconnection = require("../../database");

// GET ALL CATALOG OF TV LIVE ES
export const gettvlivees = (req, res) => {
    mysqlconnection.query("CALL PROC_SEL_LIVE_ES()", (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

// GET CATALOG OF TV LIVE ES BY ID
export const gettvliveesById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_SEL_LIVE_ES_COD(?)', [COD], (err,
        rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

// CREATE CATALOG OF TV LIVE ES
export const createtvlivees = (req, res) => {
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
    const query = 'CALL PROC_INS_LIVETV_ES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    mysqlconnection.query(query, [COD_EPG_CHANNEL, COD_CATEGORY, COD_SERVER, COD_USER, COD_CHANNEL_EPG, COD_SERVER_EPG,
        COD_EPG, TITLE, POSTER, URL, SERVER_EPG, EPG_NOW, EPG_NEXT, STATTUS, ORDER_LIVE_TV, ICON
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV LIVE IN SPANISH ADDED"
                });
            } else {
                console.log(req.body);
            }
        });
};

// UPDATE CATALOG OF TV LIVE ES
export const updatetvliveesById = (req, res) => {
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
    mysqlconnection.query("CALL PROC_UPD_LIVETV_ES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [COD_EPG_CHANNEL, COD_CATEGORY, COD_SERVER, COD_USER, COD_CHANNEL_EPG, COD_SERVER_EPG,
            COD_EPG, TITLE, POSTER, URL, SERVER_EPG, EPG_NOW, EPG_NEXT, STATTUS, ORDER_LIVE_TV, ICON, COD
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV LIVE IN SPANISH UPDATED"
                });
            } else {
                console.log(err);
            }
        });
};

// DELETE CATALOG OF TV LIVE ES
export const deletetvliveesById = (req, res) => {
    const {
        COD
    } = req.params;
    mysqlconnection.query('CALL PROC_DEL_LIVETV_ES(?)', [COD],
        (err, rows, fields) => {
            if (!err) {
                res.json({
                    Status: "TV LIVE IN SPANISH DELETED"
                });
            } else {
                console.log(err);
            }
        });
};