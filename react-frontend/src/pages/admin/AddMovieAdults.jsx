
import BanneMovieAdult from '../../partials/dashboard/BannerMovieAdult';
import { useState } from "react";
import "../../components/Cards/Card.css";
import useAuth from '../../hooks/useAuth';
// components
import Alerta from "../../components/Alerts/Alerts";
import clienteAxios from "../../config/axios";

export default function AddMovieAdult() {

    const { auth } = useAuth()
    const [CODAUDIO, setCODAUDIO] = useState("");
    const [CODQUALITY, setCODQUALITY] = useState("");
    const [CODCATEGORY, setCODCATEGORY] = useState("");
    const [CODUSER, setCODUSER] = useState(`${auth.COD}`);
    const [TITLE, setTITLE] = useState("");
    const [BACK, setBACK] = useState("");
    const [POSTER, setPOSTER] = useState("");
    const [YEAR, setYEAR] = useState("");
    const [DURATION, setDURATION] = useState("");
    const [CODFORMATVIDEO, setCODFORMATVIDEO] = useState("");
    const [URL, setURL] = useState("");
    const [SYNOPSIS, setSYNOPSIS] = useState("");

    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();
        //validar formulario
        if ([ CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER, YEAR, DURATION, CODFORMATVIDEO, URL, SYNOPSIS ].includes("")) {
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return;
        }
        setAlerta({})
        //insertar en la base de datos
        try {
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const datos = { CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER, YEAR, DURATION, CODFORMATVIDEO, URL, SYNOPSIS }
            await clienteAxios.post(`/mtmovie/adult`, datos, config)
            setAlerta({
                msg: "Pelicula Adulto Agregada Correctamente",
                error: false
            })
            //limpiar el formulario
            setCODAUDIO("");
            setCODQUALITY("");
            setCODCATEGORY("");
            setTITLE("");
            setBACK("");
            setPOSTER("");
            setYEAR("");
            setDURATION("");
            setCODFORMATVIDEO("");
            setURL("");
            setSYNOPSIS("");
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
            <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <BanneMovieAdult />
                    <div className="sm:flex sm:justify-between sm:items-center mb-8">
                    <form
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-wrap ">
                                <div className="w-full lg:w-8/12 px-4 pt-2">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">

                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                            <div className="flex flex-wrap">

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            for="title"
                                                            className=" block pt-4 uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Título:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="title"
                                                            name="title"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            placeholder="Título de la Película "
                                                            value={TITLE}
                                                            onChange={(e) => setTITLE(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-6/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            for="year"
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

                                                <div className="w-full lg:w-6/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            for="duration"
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

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                            for="sinopsis"
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
                                                            for="link"
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Link del video:
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

                                                <div className="w-full lg:w-4/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            for="calidad"
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
                                                            <option value="">Seleccione</option>
                                                            <option value="1">MP4</option>
                                                            <option value="2">MKV</option>
                                                            <option value="2">3GP</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-4/12 px-4">
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
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={CODAUDIO}
                                                            onChange={(e) => setCODAUDIO(e.target.value)}
                                                        >
                                                            <option value="">Seleccione</option>
                                                            <option value="1">Inglés</option>
                                                            <option value="2">Español</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-4/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            for="formato"
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
                                                            
                                                            <option value="1">SD</option>
                                                            <option value="2">HD</option>
                                                            <option value="3">FULL HD</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="flex flex-wrap">
                                                {/* checkboxes */}
                                                <div className="w-full lg:w-4/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            for="genero"
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Género:
                                                        </label>
                                                        <select
                                                            name="categoria"
                                                            id="categoria"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={CODCATEGORY}
                                                            onChange={(e) => setCODCATEGORY(e.target.value)}
                                                        >
                                                            <option value="">Seleccione</option>
                                                            <option value="1">Acción</option>
                                                            <option value="2">Animación</option>
                                                            <option value="3">Aventura</option>
                                                        </select>
                                                        </div>
                                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                                        <div>
                                            <div className="relative left0 top0">
                                                <img
                                                    alt="..."
                                                    src={`${BACK}`}
                                                    style={{ minHeight: "300px", maxHeight: "300px", background: "#f3f4f6" }}

                                                />
                                                <img
                                                    alt="..."
                                                    src={`${POSTER}`}
                                                    style={{ minHeight: "200px", minWidth: "130px", maxHeight: "200px", maxWidth: "130px", background: "#e5e7eb" }}
                                                    className="eye absolute" />
                                            </div>

                                            <div className="text-center md:mt-10 mt-20">

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            IMAGE Backdrops:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="back"
                                                            name="back"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            placeholder="Fondo de la Pelicula"
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
                                                            Cover image:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="front"
                                                            name="front"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            placeholder="Poster de la Pelicula"
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
    );
}