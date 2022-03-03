import React from "react";
import "./card.css";

// components

import CardFileAddMovieAdult from "../../components/Cards/CardFileAddMovieAdult.jsx";


export default function CardAddTvEs() {
  return (
    <>
      <form>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-gray-700 text-xl font-bold">Agregar Canal IPTV En Español</h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Información General
                </h6>
                <div className="flex flex-wrap">

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="title"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Nombre del Canal:
                      </label>
                      <input
                        required
                        type="text"
                        id="title"
                        name="title"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Título de la Película"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="link"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Enlace del Canal:
                      </label>
                      <input
                        required
                        type="text"
                        id="link"
                        name="link"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Enlace del Canal"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-8/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="categoria"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Categoria:
                      </label>
                      <select
                        required
                        name="categoria"
                        id="categoria"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Selecciona una Categoria</option>
                        <option value="1">CINE 24/7</option>
                        <option value="2">CANALES LOCALES</option>
                        <option value="3">CINEMA</option>
                        <option value="4">DOCUMENTALES</option>
                        <option value="5">ENTRETENIMIENTO</option>
                        <option value="6">RELIGION</option>
                        <option value="7">MUSICA</option>
                        <option value="8">DEPORTES</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-6 text-lg font-bold">
                  Servidor EPG:
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      for="servidor"
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    >
                      Servidor:
                    </label>
                    <select
                      required
                      name="servidor"
                      id="servidor"
                      className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="">Selecciona un Servidor</option>
                      <option value="1">Españoles</option>
                      <option value="2">Latinos</option>
                      <option value="3">Dish y DirectTv (EEUU)</option>
                      <option value="4">United Kingdom (UK)</option>
                    </select>
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      for="canal"
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    >
                      Canal:
                    </label>
                    <select
                      required
                      name="canal"
                      id="canal"
                      className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="">Selecciona un Canal</option>
                      <option value="1">Discovery Channel</option>
                      <option value="2">History Channel</option>
                      <option value="3">National Geographic Channel</option>
                      <option value="4">Nickelodeon</option>
                      <option value="5">Comedy Central</option>
                      <option value="6">Disney Channel</option>
                      <option value="7">Cartoon Network</option>
                      <option value="8">TLC</option>
                      <option value="9">ESPN</option>
                      <option value="10">Fox</option>
                      <option value="11">Showtime</option>
                      <option value="12">HBO</option>
                      <option value="13">TNT</option>
                      <option value="14">Syfy</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <CardFileAddMovieAdult />
          </div>
        </div>
        <div className="">
          <input type="submit"
            value="añadir"
            className="cla"
            to="#"
          />
        </div>
      </form>
    </>
  );
}
