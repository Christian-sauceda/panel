import { useState, useEffect } from "react";
import "./../../components/Cards/card.css";
import useAuth from '../../hooks/useAuth';
import ReactPlayer from 'react-player'
// components
import Alerta from "../../components/Alerts/Alerts";
import clienteAxios from "../../config/axios";
import BannerSerieCapEs from '../../partials/dashboard/BannerSerieCapEs';

export default function AddCapSerieEs() {
    const [selectformato, setSelectformato] = useState([]);
    const [selectSeriees, setSelectSeriees] = useState([]);

    const mostrarDatos = async () => {
        try {
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const resultadosf = await clienteAxios.get("/catformatvideo", config).then((response) => {
                const sf = response.data;
                setSelectformato(sf)
            })

            const resultados = await clienteAxios.get("/mttvshows/es/seltvshow/es", config).then((response) => {
                const s = response.data;
                setSelectSeriees(s)
            })

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        mostrarDatos();
    }, [])

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
            const datos = { COD_CONTENT, COD_FORMAT_VIDEO, COD_USER, NAME_CHAPTER, NUMBER_SEASON, NUMBER_CHAPTER, SYNOSIS, SUPTITLE, URL, BACK, POSTER }
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

    //funcion imprima json numero del 1 al 30
    const numeros = [...Array(31).keys()];

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
                                                            {selectSeriees.map((s) => (
                                                                <option key={s.COD_CONTENT} value={s.COD_CONTENT}>{s.TITLE_LATIN}</option>
                                                            ))}
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
                                                            {numeros.map((n) => ( 
                                                                <option key={n} value={n}>{n}</option>
                                                            ))}
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
                                                            {selectformato.map((item) => (
                                                                <option key={item.COD_FORMATO} value={item.COD_FORMATO} defaultValue={item.COD_FORMATO === 1}>{item.FORMATO}</option>
                                                            ))}
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
                                                <div className="grid place-items-center pt-6 pb-6">
                                                    <ReactPlayer
                                                        playing={false}
                                                        url={`${URL}`}
                                                        controls={true}
                                                        width="95%"
                                                        height="95%"
                                                    />
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



