import React from "react";
import "./card.css";

// components

import CardFileAddMovieAdult from "../../components/Cards/CardFileAddMovieAdult.jsx";


export default function CardAddMovieAdult() {
  return (
    <>
      <form>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-gray-700 text-xl font-bold">Agregar Película En Inglés</h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  General information
                </h6>
                <div className="flex flex-wrap">

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="title"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Title:
                      </label>
                      <input
                        required
                        type="text"
                        id="title"
                        name="title"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Movie title"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="year"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Year:
                      </label>
                      <input
                        required
                        name="year"
                        id="year"
                        placeholder="Movie Year"
                        min={1970}
                        max={2030}
                        type="number"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-slate-400 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="duration"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Duration:
                      </label>
                      <input
                        required
                        name="duration"
                        id="duration"
                        type="number"
                        placeholder="duration in minutes"
                        min={10}
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="clasificacion"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Classification:
                      </label>
                      <input
                        required
                        name="clasificacion"
                        id="clasificacion"
                        type="text"
                        placeholder="Movie Rating"
                        min={10}
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="director"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Director:
                      </label>
                      <input
                        required
                        type="text"
                        id="director"
                        name="director"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Movie director, film director"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        for="reparto"
                      >
                        Movie Cast:
                      </label>
                      <textarea
                        required
                        type="text"
                        className="border-0 px-3 py-3 placeholder-sky- text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="reparto"
                        id="reparto"
                        placeholder="movie cast"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="pais"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Country:
                      </label>
                      <input
                        required
                        type="text"
                        id="pais"
                        name="pais"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Country where I filmed the movie"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        for="sinopsis"
                      >
                        Synopsis
                      </label>
                      <textarea
                        required
                        type="text"
                        className="border-0 px-3 py-3 placeholder-sky- text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="sinopsis"
                        id="sinopsis"
                        placeholder="Synopsis of the film"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="back"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Backgorund:
                      </label>
                      <input
                        required
                        type="text"
                        id="back"
                        name="back"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="movie background"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="link"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Movie Link:
                      </label>
                      <input
                        required
                        type="text"
                        id="link"
                        name="link"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="video link"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="calidad"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Quality:
                      </label>
                      <select
                        name="calidad"
                        id="calidad"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="1">MP4</option>
                        <option value="2">MKV</option>
                        <option value="2">3GP</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="audio"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Audio:
                      </label>
                      <select
                        name="audio"
                        id="audio"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="1">Inglés</option>
                        <option value="2">Español</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="formato"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        Format:
                      </label>
                      <select
                        name="formato"
                        id="formato"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="1">SD (480p)</option>
                        <option value="2">HD (720p)</option>
                        <option value="3">FULLHD (1080p)</option>
                        <option value="3">4K (2160p)</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        for="seguridad"
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        safety pin:
                      </label>
                      <select
                        name="seguridad"
                        id="seguridad"
                        className="border-0 px-3 py-3 placeholder-sky-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="1">No</option>
                        <option value="2">Si</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                  {/* checkboxes */}
                  <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                    Genres:
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
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Crime
                    </label>
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-sky-800 focus:ring-opacity-25 border border-gray-300 rounded" 
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
                    <label class="inline-flex items-start p-2">
                      <input 
                      className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" 
                      type="checkbox" 
                      name="genero"
                      />
                      Music
                    </label>
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
