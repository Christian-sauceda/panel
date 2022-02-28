import React from "react";
import { useState } from "react";
//import { Link } from "react-router-dom";
import Axios from "axios";
import Alerta from '../Alerts/Alerts'
import "./card.css";

// components

export default function CardAddEvent() {
  const [USER_NAME, setNombre] = useState('');
  const [EMAIL_USER, setCorreoL] = useState('');
  const [PASSWORD_USER, setPass] = useState('');
  const [PASSWORD_CONFIRM, setPassConfirm] = useState('');
  const [TYPE, setTipo] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();
    if ([USER_NAME, EMAIL_USER, PASSWORD_USER, PASSWORD_CONFIRM].includes('')) {
      setAlerta({ msg: 'Hay Campos Vacios', error: true });
      return;
    }
    if (PASSWORD_USER !== PASSWORD_CONFIRM) {
      setAlerta({ msg: 'Las contraseñas no coinciden', error: true });
      return;
    }
    if (PASSWORD_USER.length < 6) {
      setAlerta({ msg: 'La contraseña debe tener al menos 6 caracteres', error: true });
      return;
    }
    setAlerta({});
    //Crear el usuario en la api
    try {
      const url = "http://localhost:3001/registro"
      await Axios.post(url, { EMAIL_USER, USER_NAME, PASSWORD_USER, TYPE });;
      setAlerta({
        msg: 'Creado Correctamente, Revisa tu Correo',
        error: false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.message,
        error: true
      })
    }
  }
  const { msg } = alerta;
  return (
    <>

      <form
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4 pb-0">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-0 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t bg-white  px-6 py-6 mb-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">Agregar Nuevo Administrador</h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mb-6">
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Información Del Administrador
                </h6>
                <div
                  className=""
                >
                  {msg && <Alerta
                    className="w-full px-3 mb-6"
                    alerta={alerta}
                  />}
                </div>
                <div className="flex flex-wrap">

                  {/* NOMBRE */}
                  <div className="w-full lg:w-8/12 px-4 mb-6">
                    <div className="relative w-full mb-3">
                      <label
                        for="USER_NAME"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Nombre:
                      </label>
                      <input
                        type="text"
                        id="USER_NAME"
                        name="USER_NAME"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Nombre del administrador"
                        value={USER_NAME}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* EMAIL */}
                  <div className="w-full lg:w-8/12 px-4 mb-6">
                    <div className="relative w-full mb-3">
                      <label
                        for="EMAIL_USER"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Correo:
                      </label>
                      <input
                        type="email"
                        id="EMAIL_USER"
                        name="EMAIL_USER"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Correo del Administrador"
                        value={EMAIL_USER}
                        onChange={(e) => setCorreoL(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* PASSWORD */}
                  <div className="w-full lg:w-6/12 px-4 mb-6">
                    <div className="relative w-full mb-3">
                      <label
                        for="PASSWORD_USER"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Contraseña:
                      </label>
                      <input
                        type="password"
                        id="PASSWORD_USER"
                        name="PASSWORD_USER"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Contraseña del Administrador"
                        value={PASSWORD_USER}
                        onChange={(e) => setPass(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* REPEAT PASSWORD */}
                  <div className="w-full lg:w-6/12 px-4 mb-6">
                    <div className="relative w-full mb-3">
                      <label
                        for="repeatPassword"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Repita la Contraseña:
                      </label>
                      <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Repita la Contraseña"
                        value={PASSWORD_CONFIRM}
                        onChange={(e) => setPassConfirm(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* TYPE USER */}
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="TYPE"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Tipo de Usuario:
                      </label>
                      <select
                        name="TYPE"
                        id="TYPE"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={TYPE}
                        onChange={(e) => setTipo(e.target.value)}
                      >
                        <option value="">Selecciona el Tipo de Usuario</option>
                        <option value="0">Administrador</option>
                        <option value="1">Manager</option>
                      </select>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="">
          <input type="submit"
            value="añadir"
            className="cla mt-6"
            to="#"
          />
        </div>
      </form>
    </>
  );
}
