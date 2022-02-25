import React from "react";
import "./card.css";

// components
import CardListCapSerieEs from "components/Cards/CardListSerieEs.js";

export default function CardAddCapSerieEs() {
  return (
    <>
      <div className="flex flex-wrap">

        <div className="w-full lg:w-8/12 px-4">
          <form>

            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">Agregar Capitulo En Español</h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Información Del Capitulo
                </h6>

                <div className="flex flex-wrap">

                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="serie"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Serie:
                      </label>
                      <select
                        name="serie"
                        id="serie"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Seleccione una Serie</option>
                        <option value="1">Dark</option>
                        <option value="2">La Casa de Papel</option>
                        <option value="3">The Walking Dead</option>
                        <option value="4">The Sopranos</option>
                        <option value="5">The Vampire Did</option>
                        <option value="6">Breaking Bad</option>
                        <option value="7">The Big Bang Theory</option>
                        <option value="8">The Simpsons</option>
                        <option value="9">The Office</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="temp"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Temporada:
                      </label>
                      <select
                        name="temp"
                        id="temp"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Seleccione una Temporada</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="year"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Titulo del Capitulo:
                      </label>
                      <input
                        required
                        name="year"
                        id="year"
                        placeholder="Titulo del Capitulo"
                        type="text"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-slate-400 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="ncapitulo"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Numero de Capitulo:
                      </label>
                      <input
                        required
                        name="ncapitulo"
                        id="ncapitulo"
                        type="number"
                        placeholder="Numero del Capitulo"
                        min={1}
                        max={300}
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="reparto"
                      >
                        Sinopsis
                      </label>
                      <textarea
                        required
                        type="text"
                        className="border-0 px-3 py-3 placeholder-sky- text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="sinopsis"
                        id="sinopsis"
                        placeholder="Sinopsis del Capitulo"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="enlace"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Enlace del Capitulo:
                      </label>
                      <input
                        required
                        type="text"
                        id="enlace"
                        name="enlace"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Enlace del Capitulo"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="temp"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Formato:
                      </label>
                      <select
                        name="format"
                        id="format"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="1">MP4</option>
                        <option value="2">WEBM</option>
                        <option value="3">MKV</option>
                        <option value="4">FLV</option>
                        <option value="5">AVI</option>
                      </select>
                    </div>
                  </div>

                </div>
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
        </div>

        <div className="w-full lg:w-4/12 px-4">
          <CardListCapSerieEs />
        </div>

      </div>

    </>
  );
}
