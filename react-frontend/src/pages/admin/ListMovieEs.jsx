import { useState, useEffect } from "react";
import "./../../components/Cards/card.css";
import useAuth from '../../hooks/useAuth';
import 'styled-components';
import dateFormat from 'dateformat';

import DataTable, { createTheme } from 'react-data-table-component'

// components
import clienteAxios from "../../config/axios";
import BannerSerieCapEn from '../../partials/dashboard/BannerListMovieEs';

const AddCapSerieEs = () => {
    const { auth } = useAuth()
    const [alerta, setAlerta] = useState({});

    // 1 configurar el hooks
    const [peliculas, setPeliculas] = useState([]);
    // 2 funcion para mostrar los datos con fetch
    const URL = 'http://localhost:3001/mtmovie/es'

    const consultarApi = async () => {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        const response = await fetch(URL, config)
        const data = await response.json()
        setPeliculas(data)
        console.log(data)
    }

    useEffect(() => {
        consultarApi()
    }, [])
    // 3 comfigutamos las columnas para el data table
    const columns = [
        {
            name: 'TITULO',
            selector: row => row.TITLE,
        },
        {
            name: 'TIPO',
            selector: row => row.CONTENIDO,
        },
        {
            name: 'CALIDAD',
            selector: row => row.CALIDAD,
        },
        {
            name: 'FECHA SUBIDA',
            selector: row => dateFormat(row.UPLOAD_DATE, "dddd, mmmm dS, yyyy"),
        },
        {
            cell: row => (
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="bg-green-500 text-white hover:bg-green-700 text-lg p-1">Editar</button>
                    <button type="button" className="bg-red-500 text-white hover:bg-red-700 text-lg p-1 mx-1">Eliminar</button>
                </div>
            ),
        },
    ]

    // 4 mostrar el data table

    return (
        <>
            <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <BannerSerieCapEn />
                    <DataTable
                        columns={columns}
                        data={peliculas}
                        pagination={true}
                    />
                </div>
            </main>
        </>
    );
}
export default AddCapSerieEs;


