import React from "react";
import "./card.css";

// components

import CardFileAddMovieAdult from "components/Cards/CardFileAddMovieAdult.js";


export default function CardAddEvent() {
  return (
    <>
      <form>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 pb-0">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-0 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t bg-white px-6 py-6 mb-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">Agregar Evento Deportivo</h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mb-6">
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Información General
                </h6>
                <div className="flex flex-wrap">

                  <div className="w-full lg:w-12/12 px-4 mb-6">
                    <div className="relative w-full mb-3">
                      <label
                        for="title"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Nombre del Evento:
                      </label>
                      <input
                        required
                        type="text"
                        id="title"
                        name="title"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Título de la Película"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4 mb-6">
                    <div className="relative w-full mb-3">
                      <label
                        for="link"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Enlace del Evento:
                      </label>
                      <input
                        required
                        type="text"
                        id="link"
                        name="link"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Enlace del Canal"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-8/12 px-4 mb-6">
                    <div className="relative w-full mb-3">
                      <label
                        for="categoria"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Categoria:
                      </label>
                      <select
                        required
                        name="categoria"
                        id="categoria"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Selecciona una Categoria</option>
                        <option value="1">Futbol</option>
                        <option value="2">Basquetbol</option>
                        <option value="3">Tenis</option>
                        <option value="4">Voleibol</option>
                        <option value="5">Boxeo</option>
                      </select>
                    </div>
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
