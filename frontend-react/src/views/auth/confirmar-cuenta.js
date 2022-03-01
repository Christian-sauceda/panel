import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../../components/Alerts/Alerts";

export default function ConfirmarCuenta() {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const [cargando, setCargando] = useState(true)
  const [alerta, setAlerta] = useState({});

  const params = useParams()
  const { id } = params

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:3001/confirmar/${id}`
        const { data } = await axios.get(url)
        setCuentaConfirmada(true)
        setAlerta({
          msg: data.message,
          error: false
        })
      } catch (error) {
        setAlerta({
          msg: error.response.data.message,
          error: true
        })
      }

      setCargando(false)
    }
    confirmarCuenta()
  }, [])

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h1 className="text-blueGray-500 font-bold">
                    Confirma tu cuenta Y comienza a adminstrar TopMedia+
                  </h1>
                </div>
              </div>
              {!cargando &&
                <Alerta
                  alerta={alerta}
                />}
                {cuentaConfirmada && (
                  <Link
                    to="/"
                  className="block text-2xl text-center my-5 text-sky-800 font-bold mt-5 mb-5"
                  >Iniciar Sesion</Link>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
