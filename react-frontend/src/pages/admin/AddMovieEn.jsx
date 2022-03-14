import BanneMovieEn from '../../partials/dashboard/BannerMovieEn';
import { useState } from "react";
import "./../../components/Cards/card.css";
import useAuth from '../../hooks/useAuth';
// components
import Alerta from "../../components/Alerts/Alerts";
import clienteAxios from "../../config/axios";

export default function AddMovieEn() {

    const { auth } = useAuth()
    const [CODAUDIO, setCODAUDIO] = useState("");
    const [CODQUALITY, setCODQUALITY] = useState("");
    const [CODCATEGORY, setCODCATEGORY] = useState("");
    const [CODUSER, setCODUSER] = useState(`${auth.COD}`);
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

    const handleSubmit = async e => {
        e.preventDefault()
        //validad formulario
        if ([CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER, YEAR, CLASIF, DURATION, COUNTRY, CALIF, DIRECTOR, CAST, ASKPIN, CODFORMATVIDEO, URL, SYNOPSIS].includes('')) {
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return;
        }
        setAlerta({})
        //Crear serie
        try {
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const datos = { CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER, YEAR, CLASIF, DURATION, COUNTRY, CALIF, DIRECTOR, CAST, ASKPIN, CODFORMATVIDEO, URL, SYNOPSIS }
            await clienteAxios.post(`/mtmovie/en`, datos, config)
            setAlerta({
                msg: 'Pelicula en Ingles Agregada Correctamente',
                error: false
            })
            //limpiar los campos
            setCODAUDIO("");
            setCODQUALITY("");
            setCODCATEGORY("");
            setTITLE("");
            setBACK("");
            setPOSTER("");
            setYEAR("");
            setCLASIF("");
            setDURATION("");
            setCOUNTRY("");
            setCALIF("");
            setDIRECTOR("");
            setCAST("");
            setASKPIN("");
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
                    <BanneMovieEn />
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
                                                            TITLE:
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
                                                            YEAR:
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
                                                            DURATION:
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
                                                            CLASIFICATION:
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
                                                            CALIFICATION:
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
                                                            DIRECTOR:
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
                                                            CAST:
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
                                                            COUNTRY:
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
                                                            SYNOPSIS
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
                                                            LINK OF THE MOVIE:
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
                                                        QUANTITY:
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

                                                <div className="w-full lg:w-3/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            AUDIO:
                                                        </label>
                                                        <select
                                                            name="audio"
                                                            id="audio"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={CODAUDIO}
                                                            onChange={(e) => setCODAUDIO(e.target.value)}
                                                        >
                                                        <option value="">Seleccione</option>
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
                                                            FORMAT:
                                                        </label>
                                                        <select
                                                            name="formato"
                                                            id="formato"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={CODFORMATVIDEO}
                                                            onChange={(e) => setCODFORMATVIDEO(e.target.value)}
                                                        >
                                                            <option value="">Seleccione</option>
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
                                                            safety pin:
                                                        </label>
                                                        <select
                                                            name="seguridad"
                                                            id="seguridad"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={ASKPIN}
                                                            onChange={(e) => setASKPIN(e.target.value)}
                                                        >
                                                        <option value="">Seleccione</option>
                                                            <option value="1">No</option>
                                                            <option value="2">Si</option>
                                                        </select>
                                                    </div>


                                                </div>
                                                {/* checkboxs de generos */}
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                    >
                                                        GENRE:
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="genero"
                                                        name="genero"
                                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        placeholder="genero del video"
                                                        value={CODCATEGORY}
                                                        onChange={(e) => setCODCATEGORY(e.target.value)}
                                                    />
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
                                                            placeholder="Fondo de la Serie"
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
                                                            placeholder="Poster de la Serie"
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