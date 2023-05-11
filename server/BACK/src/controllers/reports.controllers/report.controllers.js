import 'regenerator-runtime/runtime'
const mysqlconnection = require("../../database");


// GET INFORME 
export const getInforme = async (req, res) => {
    const {
        fecha_inicio,
        fecha_fin,
        categoria
    } = req.params;
    mysqlconnection.query("CALL PROC_REPORTE(?,?,?)", [fecha_inicio, fecha_fin, categoria], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(req.body);
        }
    }
    );
};