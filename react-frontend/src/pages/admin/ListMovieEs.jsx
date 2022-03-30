import { useState, useEffect } from "react";
import "./../../components/Cards/card.css";
import useAuth from '../../hooks/useAuth';
import styled, { keyframes } from 'styled-components';
import MUIDataTable from "mui-datatables";
import dateFormat, { masks } from "dateformat";
// components
import clienteAxios from "../../config/axios";

import BannerListMovieEs from '../../partials/dashboard/BannerListMovieEs';

const AddCapSerieEs = () => {

    // 1 configurar el hooks
    const [peliculas, setPeliculas] = useState([]);
    const [pending, setPending] = useState(true);
    // 2 funcion para mostrar los datos con fetch
    const consultarApi = async () => {
        try {
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const resultado = await clienteAxios.get("/mtmovie/es", config).then((response) => {
                const data = response.data
                setPeliculas(data)
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            consultarApi()
            setPending(false)
        })
        return () => clearTimeout(timeout)
    }, [])
    // 3 comfigutamos las columnas para el data table
    const columns = [
        {
            name: "COD_CONTENT",
            label: "Codigo",
            options: {
                filter: false,
                sort: true,
                display: false
            }
        },
        {
            name: 'TITLE',
            label: 'Titulo',
            options: {
                filter: true,
            },
        },
        {
            name: 'CONTENIDO',
            label: 'Contenido',
            options: {
                filter: true,
            },
        },
        {
            name: 'CALIDAD',
            label: 'Calidad',
            options: {
                filter: true,
            },
        },
        {
            name: 'UPLOAD_DATE',
            label: 'Fecha',
            options: {
                filter: true,
                customBodyRender: (value) => {
                    return dateFormat(value, "dd/mm/yyyy")
                }
            },
        },
        {
            name: 'Acciones',
            label: 'Acciones',
            options: {
                filter: true,

                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            <button className="bg-green-600 font-bold mr-1 p-2 text-white hover:bg-green-700" onClick={() => {
                                window.location.href = `/admin/movie/es/edit/${tableMeta.rowData[0]}`
                            }}>
                                <i className="fas fa-edit">EDITAR</i>
                            </button>

                            <button className="bg-red-500 hover:bg-red-700 font-bold  p-2 text-white" onClick={(e) => {
                                // eliminar pelicula con alert
                                    e.preventDefault()
                                    if (window.confirm("¿Estas seguro de eliminar esta pelicula?")) {
                                        const token = localStorage.getItem("token")
                                        const config = {
                                            headers: {
                                                "content-type": "application/json",
                                                Authorization: `Bearer ${token}`
                                            }
                                        }
                                        clienteAxios.delete(`/mtmovie/es/${tableMeta.rowData[0]}`, config).then(() => {
                                            // actualizar el state
                                            consultarApi()
                                            
                                        })
                                    }

                                
                            }}>
                                <i className="fas fa-edit">ELIMINAR</i>
                            </button>

                        </>
                    )
                }
            },

        },
    ]

    // 4 mostrar el data table

    return (
        <>
            <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <BannerListMovieEs />

                    <MUIDataTable
                        data={peliculas}
                        columns={columns}
                        options={{
                            responsive: "scroll",
                            selectableRows: "none",
                            fixedHeader: false ,
                            elevation: 10,
                            textLabels: {
                                body: {
                                    noMatch: "No hay datos para mostrar",
                                    toolTip: "Ordenar",
                                },
                                pagination: {
                                    next: "Siguiente",
                                    previous: "Anterior",
                                    rowsPerPage: "Filas por página:",
                                    displayRows: "de",
                                },
                                toolbar: {
                                    search: "Buscar",
                                    downloadCsv: "Descargar CSV",
                                    print: "Imprimir",
                                    viewColumns: "Ver Columnas",
                                    filterTable: "Filtrar Tabla",
                                },
                                filter: {
                                    all: "Todos",
                                    title: "FILTROS",
                                    reset: "RESETEAR",
                                },
                                viewColumns: {
                                    title: "Mostrar Columnas",
                                    titleAria: "Mostrar/Ocultar Columnas",
                                },
                            },
                        }}
                    />
                </div>
            </main>
        </>
    );
}
export default AddCapSerieEs;


