import { useState } from "react";
import "./../../components/Cards/card.css";
import useAuth from '../../hooks/useAuth';
// components
import Alerta from "../../components/Alerts/Alerts";
import clienteAxios from "../../config/axios";
import BannerSerieCapEs from '../../partials/dashboard/BannerSerieCapEs';

export default function AddCapSerieEs() {
    const { auth } = useAuth()
    const [COD_CONTENT, setCOD_CONTENT] = useState("");
    const [COD_FORMAT_VIDEO, setCOD_FORMAT_VIDEO] = useState("");
    const [COD_USER, setCOD_USER] = useState(`${auth.COD}`);
    const [NAME_CHAPTER, setNAME_CHAPTER] = useState("");
    const [NUMBER_SEASON, setNUMBER_SEASON] = useState("");
    const [NUMBER_CHAPTER, setNUMBER_CHAPTER] = useState("");
    const [SYNOSIS, setSYNOSIS] = useState("");
    const [URL, setURL] = useState("");
    const [SUPTITLE, setSUPTITLE] = useState("Español");
    const [BACK, setBACK] = useState("");
    const [POSTER, setPOSTER] = useState("");

    const [alerta, setAlerta] = useState({});

     const handleSubmit = async e => {
        e.preventDefault();

        if ([COD_CONTENT, COD_FORMAT_VIDEO, COD_USER, NAME_CHAPTER, NUMBER_SEASON, NUMBER_CHAPTER, SYNOSIS, URL, SUPTITLE, BACK, POSTER].includes("")) {
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return;
        }
        setAlerta({})
        try {
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const datos = { COD_CONTENT, COD_FORMAT_VIDEO, COD_USER, NAME_CHAPTER, NUMBER_SEASON, NUMBER_CHAPTER, SYNOSIS, URL, SUPTITLE, BACK, POSTER }
            await clienteAxios.post("/mttvshowschapter", datos, config)
            setAlerta({
                 msg: "Capítulo de serie en Español Agregado",
                error: false
            })
            //LIMPIAR CAMPOS
            setCOD_CONTENT("");
            setCOD_FORMAT_VIDEO("");
            setNAME_CHAPTER("");
            setNUMBER_SEASON("");
            setNUMBER_CHAPTER("");
            setSYNOSIS("");
            setURL("");
            setBACK("");
            setPOSTER("");

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
                    <BannerSerieCapEs />
                    <div className="sm:flex sm:justify-between sm:items-center mb-8">
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-8/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                            <div className="flex flex-wrap pt-4">

                                                <div className="w-full lg:w-6/12 px-4 ">
                                                    <div className="relative w-full  mb-3">
                                                        <label
                                                            for="serie"
                                                            className="block  uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Serie:
                                                        </label>
                                                        <select
                                                            name="serie"
                                                            id="serie"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={COD_CONTENT}
                                                            onChange={(e) => setCOD_CONTENT(e.target.value)}
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
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Temporada:
                                                        </label>
                                                        <select
                                                            name="temp"
                                                            id="temp"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={NUMBER_SEASON}
                                                            onChange={(e) => setNUMBER_SEASON(e.target.value)}
                                                        >
                                                            <option value="">Seleccione una Temporada</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="10">11</option>
                                                            <option value="10">12</option>
                                                            <option value="10">13</option>
                                                            <option value="10">14</option>
                                                            <option value="10">15</option>
                                                            <option value="10">16</option>
                                                            <option value="10">17</option>
                                                            <option value="10">18</option>
                                                            <option value="10">19</option>
                                                            <option value="10">20</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-4/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            for="ncapitulo"
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Numero de Capitulo:
                                                        </label>
                                                        <input
                                                            name="ncapitulo"
                                                            id="ncapitulo"
                                                            type="number"
                                                            placeholder="Numero del Capítulo"
                                                            min={1}
                                                            max={300}
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={NUMBER_CHAPTER}
                                                            onChange={(e) => setNUMBER_CHAPTER(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            for="year"
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Título del Capítulo:
                                                        </label>
                                                        <input
                                                            name="year"
                                                            id="year"
                                                            placeholder="Título del Capítulo"
                                                            type="text"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={NAME_CHAPTER}
                                                            onChange={(e) => setNAME_CHAPTER(e.target.value)}
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
                                                            placeholder="Sinopsis del Capítulo"
                                                            rows="4"
                                                            value={SYNOSIS}
                                                            onChange={(e) => setSYNOSIS(e.target.value)}
                                                        >
                                                        </textarea>
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            for="enlace"
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Enlace del Capítulo:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="enlace"
                                                            name="enlace"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            placeholder="Enlace del Capítulo"
                                                            value={URL}
                                                            onChange={(e) => setURL(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-6/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            for="format"
                                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                        >
                                                            Formato:
                                                        </label>
                                                        <select
                                                            name="format"
                                                            id="format"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={COD_FORMAT_VIDEO}
                                                            onChange={(e) => setCOD_FORMAT_VIDEO(e.target.value)}
                                                        >
                                                            <option value="">Seleccione Formato</option>
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
                                                            Imagen de Fondo:
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
                                                            Imagen de Portada:
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
    );
}



