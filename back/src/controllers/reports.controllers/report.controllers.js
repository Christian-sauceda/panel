import 'regenerator-runtime/runtime'
const mysqlconnection = require("../../database");


// GET INFORME by ID  CONTENT
export const getInforme = async (req, res) => {
    const { ID } = req.params;
    mysqlconnection.query("CALL PROC_REPORTE_ID(?)", [ID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(req.params);
        }
    });
};

// GET INFORME by ID  CONTENT and DATE init and DATE end
export const getInformeDate = async (req, res) => {
    const { ID, DATE_INIT, DATE_END } = req.params;
    mysqlconnection.query("CALL PROC_REPORTE_ID_DATE(?,?,?)", [ID, DATE_INIT, DATE_END], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(req.params);
        }
    });
}

