import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import BanneMovieEs from '../../partials/dashboard/BannerMovieEs';
import "../../components/Cards/card.css";
import React from "react";
// import back from "../../assets/img/back.jpg";
// import front from "../../assets/img/poster.jpg";
import Alerta from "../../components/Alerts/Alerts";
import Select from 'react-select';

function AddMovieEs() {

    const { auth, cargando } = useAuth()

    const [CODAUDIO, setCODAUDIO] = useState("");
    const [CODQUALITY, setCODQUALITY] = useState("");
    const [CODUSER, setCODUSER] = useState(auth.COD);
    const [TITLE, setTITLE] = useState("");
    const [BACK, setBACK] = useState("");
    const [POSTER, setPOSTER] = useState("");
    const [YEAR, setYEAR] = useState("");
    const [CLASIF, setCLASIF] = useState("");
    const [DURATION, setDURATION] = useState("");
    const [COUNTRY, setCOUNTRY] = useState("");
    const [CALIF, setCALIF] = useState("");
    const [DIRECTOR, setDIRECTOR] = useState("");
    const [CAST, setCAST] = useState("");
    const [ASKPIN, setASKPIN] = useState("");
    const [CODFORMATVIDEO, setCODFORMATVIDEO] = useState("");
    const [URL, setURL] = useState("");
    const [SYNOPSIS, setSYNOPSIS] = useState("");

    const [alerta, setAlerta] = useState({});

    const [CODCATEGORY, setCODCATEGORY] = useState({
        categoria: [],
    });

    //desestructurar arreglo
    const { categoria, response } = CODCATEGORY;
    console.log(categoria);
    const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { categoria } = CODCATEGORY;
        CODCATEGORY = categoria;
        // Case 1 : The user checks the box
        if (checked) {
            setCODCATEGORY({
                categoria: [...categoria, parseInt(value)],
            });
        }

        // Case 2  : The user unchecks the box
        else {
            setCODCATEGORY({
                categoria: categoria.filter((e) => e !== parseInt(value)),
            });
        }

    };
   

    const handleSubmit = e => {
        e.preventDefault();
        if ([CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER, YEAR, CLASIF, DURATION, COUNTRY, CALIF, DIRECTOR, CAST, ASKPIN, CODFORMATVIDEO, URL, SYNOPSIS].includes('')) {
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return;
        }
    }
    const { msg } = alerta;
    return (
        <>
            <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <BanneMovieEs />
                    <div className="sm:flex sm:justify-between sm:items-center mb-8">

                        <form
                            onSubmit={handleSubmit}
                        >

                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-8/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                            <div className="flex flex-wrap">
                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2 pt-2"
                                                        >
                                                            Título:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="title"
                                                            name="title"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            placeholder="Título de la Película"
                                                            value={TITLE}
                                                            onChange={(e) => setTITLE(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-3/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Año:
                                                        </label>
                                                        <input
                                                            name="year"
                                                            id="year"
                                                            placeholder="Año de la Película"
                                                            min={1970}
                                                            max={2030}
                                                            type="number"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={YEAR}
                                                            onChange={(e) => setYEAR(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-3/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Duración:
                                                        </label>
                                                        <input
                                                            name="duration"
                                                            id="duration"
                                                            type="number"
                                                            placeholder="Duración en minutos"
                                                            min={10}
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={DURATION}
                                                            onChange={(e) => setDURATION(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-3/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Clasificacion:
                                                        </label>
                                                        <input
                                                            name="clasificacion"
                                                            id="clasificacion"
                                                            type="text"
                                                            placeholder="Clasificacion de la Película"
                                                            min={10}
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={CLASIF}
                                                            onChange={(e) => setCLASIF(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-3/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Calificacion:
                                                        </label>
                                                        <input
                                                            name="calificacion"
                                                            id="calificacion"
                                                            type="text"
                                                            placeholder="Calificacion de la Película"
                                                            min={10}
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={CALIF}
                                                            onChange={(e) => setCALIF(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Director:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="director"
                                                            name="director"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            placeholder="Director de la Película"
                                                            value={DIRECTOR}
                                                            onChange={(e) => setDIRECTOR(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Reparto
                                                        </label>
                                                        <textarea
                                                            type="text"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            name="reparto"
                                                            id="reparto"
                                                            placeholder="Reparto de la Película"
                                                            rows="4"
                                                            value={CAST}
                                                            onChange={(e) => setCAST(e.target.value)}
                                                        ></textarea>
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Pais:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="pais"
                                                            name="pais"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            placeholder="Pais donde filmo la Película"
                                                            value={COUNTRY}
                                                            onChange={(e) => setCOUNTRY(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Sinopsis
                                                        </label>
                                                        <textarea
                                                            type="text"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            name="sinopsis"
                                                            id="sinopsis"
                                                            placeholder="Sinopsis de la Película"
                                                            rows="4"
                                                            value={SYNOPSIS}
                                                            onChange={(e) => setSYNOPSIS(e.target.value)}
                                                        ></textarea>
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Link de la Película:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="link"
                                                            name="link"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            placeholder="Link del video"
                                                            value={URL}
                                                            onChange={(e) => setURL(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-3/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Calidad:
                                                        </label>
                                                        <select
                                                            name="calidad"
                                                            id="calidad"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={CODQUALITY}
                                                            onChange={(e) => setCODQUALITY(e.target.value)}
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
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Audio:
                                                        </label>
                                                        <select
                                                            name="audio"
                                                            id="audio"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={CODAUDIO}
                                                            onChange={(e) => setCODAUDIO(e.target.value)}
                                                        >
                                                            <option value="1">Español</option>
                                                            <option value="2">Inglés</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-3/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Formato:
                                                        </label>
                                                        <select
                                                            name="formato"
                                                            id="formato"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={CODFORMATVIDEO}
                                                            onChange={(e) => setCODFORMATVIDEO(e.target.value)}
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
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Pin de Seguridad:
                                                        </label>
                                                        <select
                                                            name="seguridad"
                                                            id="seguridad"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={ASKPIN}
                                                            onChange={(e) => setASKPIN(e.target.value)}
                                                        >
                                                            <option value="1">No</option>
                                                            <option value="2">Si</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="">
                                                {/* checkboxes */}

                                                <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                                                    Generos:
                                                </label>
                                                <div className=" p-2 mx-auto grid grid-cols-6">

                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="1"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Aventura
                                                    </label>
                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="2"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Acción
                                                    </label>
                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="3"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Comedia
                                                    </label>
                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="4"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Drama
                                                    </label>
                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="5"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Fantasía
                                                    </label>
                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="6"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Suspenso
                                                    </label>
                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="6"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Suspenso
                                                    </label>
                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="6"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Suspenso
                                                    </label>
                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="6"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Suspenso
                                                    </label>
                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="6"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Suspenso
                                                    </label>
                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="6"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Suspenso
                                                    </label>
                                                    <label className="inline-flex items-start p-2">
                                                        <input
                                                            className="text-sky-800 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                                                            type="checkbox"
                                                            name="categoria"
                                                            value="6"
                                                            id="flexCheckDefault"
                                                            onChange={handleChange}
                                                        />
                                                        Suspenso
                                                    </label>

                                                </div>
                                            </div>

                                        </div>
                                        <input
                                            type="text"
                                            className="hidden"
                                            name="response"
                                            value={CODCATEGORY.response}
                                            id="floatingTextarea2"
                                            onChange={handleChange}
                                        ></input>
                                    </div>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                                        <div>
                                            <div className="relative left0 top0">
                                                <img
                                                    alt="..."
                                                    src={''}

                                                />
                                                <img
                                                    alt="..."
                                                    src={''}
                                                    className="eye absolute" />
                                            </div>

                                            <div className="text-center md:mt-10 mt-20">

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Imagen de Fondo:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="back"
                                                            name="back"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            placeholder="Fondo de la Película"
                                                            value={BACK}
                                                            onChange={(e) => setBACK(e.target.value)}

                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Imagen de Portada:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="front"
                                                            name="front"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            placeholder="Portada de la Película"
                                                            value={POSTER}
                                                            onChange={(e) => setPOSTER(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {msg && <Alerta alerta={alerta} />}
                            <div className="">
                                <input type="submit"
                                    value="añadir"
                                    className="cla"
                                    to="#"
                                />
                            </div>

                        </form>
                    </div>

                </div>
            </main>

        </>

    )

}

export default AddMovieEs