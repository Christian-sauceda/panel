import { useState, useEffect } from "react";
import "./../../components/Cards/card.css";
import useAuth from '../../hooks/useAuth';
import styled, { keyframes } from 'styled-components';
import dateFormat from 'dateformat';

import DataTable, { createTheme } from 'react-data-table-component'

// components

import BannerListEventos from '../../partials/dashboard/BannerListEventos';

const AddCapSerieEs = () => {

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
            <div>Buscando Los Usuarios...</div>
        </div>
    );

    // 1 configurar el hooks
    const [peliculas, setPeliculas] = useState([]);
    const [pending, setPending] = useState(true);
    // 2 funcion para mostrar los datos con fetch
    const URL = `http://localhost:3001/users`
    // VITE_LISTUSERS_API = 
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
            name: 'USUARIO',
            selector: row => row.USER_NAME,
        },
        {
            name: 'CORREO',
            selector: row => row.EMAIL_USER,
        },
        {
            name: 'TIPO',
            selector: row => (
                <div className={`${row.TYPE_USER === "0" ? 'text-indigo-600 font-bold' : 'text-black' }`}>
                    {row.TYPE_USER === "0" ? 'MANAGER' : 'ADMINISTRADOR'}
                </div>
            ),
        },
        {
            name: 'ESTADO',
            selector: row => (
                <div className={`${row.CONFIRMED === 0 ? 'text-indigo-600 font-bold' : 'text-black' }`}>
                    {row.CONFIRMED === 0 ? 'PENDIENTE' : 'CONFIRMADO'}
                </div>
            ),
        },
        {
            name: 'FECHA CREACION',
            selector: row => dateFormat(row.UPLOAD_DATE, "dddd, mmmm dS, yyyy"),
        },
        {
            name: 'ACCIONES',
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
                    <BannerListEventos />
                    <DataTable
                        columns={columns}
                        data={peliculas}
                        progressPending={pending}
                        noDataComponent={<CustomLoader />}
                        pagination={true}
                    />
                </div>
            </main>
        </>
    );
}
export default AddCapSerieEs;


