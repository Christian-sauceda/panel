import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./../../components/Cards/card.css";
import styled, { keyframes } from 'styled-components';
import MUIDataTable from "mui-datatables";
import dateFormat, { masks } from "dateformat";
// components
import clienteAxios from "../../config/axios";

const AddCapSerieAdult = () => {
    const rotate360 = keyframes`
    from {
      transform: rotate(0deg);
    }
  
    to {
      transform: rotate(360deg);
    }
  `;
    const Spinner = styled.div`
      margin: 16px;
      animation: ${rotate360} 1s linear infinite;
      transform: translateZ(0);
      border-top: 4px solid grey;
      border-right: 4px solid grey;
      border-bottom: 4px solid grey;
      border-left: 10px solid black;
      background: transparent;
      width: 80px;
      height: 80px;
      border-radius: 50%;
  `;
    const CustomLoader = () => (
        <div style={{ padding: '24px' }}>
            <Spinner />
            <div>Buscando las Películas...</div>
        </div>
    );
        //extraer parámetros de la ruta
        const { COD } = useParams();
    // 1 configurar el hooks
    const [peliculas, setPeliculas] = useState([0]);
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
            const resultado = await clienteAxios.get(`/mttvshowschapter/tvshow/${COD}`, config).then((response) => {
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
            name: "COD_CHAPTERS_SERIES",
            label: "Codigo",
            options: {
                filter: false,
                sort: true,
                display: false
            }
        },
        {
            name: 'NAME_CHAPTERS',
            label: 'Nombre Capitulo',
            options: {
                filter: true,
            },
        },
        {
            name: 'CHAPTER_NUMBER',
            label: 'Numero Capitulo',
            options: {
                filter: true,
            },
        },
        {
            name: 'SEASON_NUMBER',
            label: 'Numero Temporada',
            options: {
                filter: true,
            },
        },
        {
            name: 'DATE_ADD',
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
                            <button className="bg-green-600 font-bold mr-1 p-2 text-white" onClick={() => {
                                window.location.href = `/admin/tvshows/es/capedit/${tableMeta.rowData[0]}`
                            }}>
                                <i className="fas fa-edit">EDITAR</i>
                            </button>

                            <button className="bg-red-500 font-bold  p-2 text-white" onClick={() => {
                                window.location.href = `/admin/tvshows/es/capdelete/${tableMeta.rowData[0]}`
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
                    <MUIDataTable
                        title={`${peliculas[0]?.TITLE  ? 'Listado de Capitulos de: ' +  peliculas[0].TITLE  + ' (Español)': 'No Hay Capítulos Agregados a Esta Serie'}`}
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
                                selectedRows: {
                                    text: "fila(s) seleccionada(s)",
                                    delete: "Eliminar",
                                    deleteAria: "Eliminar fila seleccionada",
                                },
                            },
                        }}
                    />
                </div>
            </main>
        </>
    );
}
export default AddCapSerieAdult;


