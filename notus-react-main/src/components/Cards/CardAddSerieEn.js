import React from "react";
import "./card.css";

// components

import CardFileAddMovieAdult from "components/Cards/CardFileAddMovieAdult.js";


export default function CardAddMovieAdult() {
  return (
    <>
      <form>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">Agregar Serie En Inglés</h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  information General
                </h6>
                <div className="flex flex-wrap">

                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="title"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Title Original:
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

                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="titlelatin"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        title in latin:
                      </label>
                      <input
                        required
                        type="text"
                        id="titlelatin"
                        name="titlelatin"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Título de la Película"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="year"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Year:
                      </label>
                      <input
                        required
                        name="year"
                        id="year"
                        placeholder="Año de la Película"
                        min={1970}
                        max={2030}
                        type="number"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-slate-400 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>


                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="clasificacion"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Clasificacion:
                      </label>
                      <input
                        required
                        name="clasificacion"
                        id="clasificacion"
                        type="text"
                        placeholder="Clasificacion de la Película"
                        min={10}
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="director"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Director:
                      </label>
                      <input
                        required
                        type="text"
                        id="director"
                        name="director"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Director de la Película"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="reparto"
                      >
                        Cast
                      </label>
                      <textarea
                        required
                        type="text"
                        className="border-0 px-3 py-3 placeholder-sky- text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="reparto"
                        id="reparto"
                        placeholder="Reparto de la Película"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="pais"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Country:
                      </label>
                      <input
                        required
                        type="text"
                        id="pais"
                        name="pais"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Pais donde filmo la Película"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="sinopsis"
                      >
                        Sinosys
                      </label>
                      <textarea
                        required
                        type="text"
                        className="border-0 px-3 py-3 placeholder-sky- text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="sinopsis"
                        id="sinopsis"
                        placeholder="Sinopsis de la Película"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="back"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Backgorund:
                      </label>
                      <input
                        required
                        type="text"
                        id="back"
                        name="back"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Background de la Película"
                      />
                    </div>
                  </div>


                </div>
                <div className="flex flex-wrap">
                  {/* checkboxes */}
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Genero:
                  </label>
                  <div class="max-w-xs p-2 mx-auto">
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Action
                    </label>
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Adventure
                    </label>
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Animation
                    </label>
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Comedy
                    </label>
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-sky-800 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Crime
                    </label>
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Documentary
                    </label>
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Drama
                    </label>
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Family
                    </label>
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Fantasy
                    </label>
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      History
                    </label>
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Horror
                    </label>
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
