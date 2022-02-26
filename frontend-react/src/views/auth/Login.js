import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
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
                <form>
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
                      required
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
                      required
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
