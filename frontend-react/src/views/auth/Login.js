import { useState } from "react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Alerta from '../../components/Alerts/Alerts'
import useAuth from "../../hooks/useAuth";
import Axios from "axios";


export default function Login() {
    const [USER_NAME, setUser_name] = useState('')
    const [PASSWORD, setPassword] = useState('')
    const [alerta, setAlerta] = useState('')

    const history = useHistory();

    const handSubmit = async (e) => {
      e.preventDefault();
      if([USER_NAME, PASSWORD].includes('')){
          setAlerta({
            msg: 'Todos los campos son obligatorios',
            error: true
          });
          return;
      }
      try {
        const url = `http://localhost:3001/login`
          const { data } = await Axios.post(url, { USER_NAME, PASSWORD });
          localStorage.setItem('token', data.token);
          history.push('/admin/inicio');
        }
      catch (error) {
        setAlerta({
          msg: error.response.data.message,
          error: true
        })
      }
    }
    const { msg } = alerta
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Bienvenido al panel administrador de TopMedia+
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-5 font-bold ">
                  <small>Inicia Sesión con tus Credenciales</small>
                </div>
                {msg && <Alerta
                  alerta={alerta}
                  
                />}
                <form onSubmit={handSubmit} >
                  <div className="my-8">
                    <label
                      for="user"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Username:
                    </label>
                    <input type="text"
                      autoComplete="off"
                      id="user"
                      name="user"
                      placeholder="Tu Username"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={USER_NAME}
                      onChange={(e) => setUser_name(e.target.value)}
                    />
                  </div>

                  <div className="my-5 mt-4">
                    <label
                      for="pass"
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Password:
                    </label>
                    <input type="password"
                      name="pass"
                      id="pass"
                      placeholder="Tu Password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={PASSWORD}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <input type="submit"
                    value="Ingresar"
                    className="bg-blueGray-800 mt-4 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    href="/admin"
                  />
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">

              </div>
              <div className="w-1/2 text-right">
                <Link to="/recuperar-password" className="text-blueGray-200">
                  <small>¿Se te olvidó tu contraseña?</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
