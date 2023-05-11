import { useState, useEffect } from "react";
import "./../../components/Cards/card.css";
import useAuth from '../../hooks/useAuth';
import { PDFDownloadLink, PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
// components
import clienteAxios from '../../config/axios';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        padding: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: '32px',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: '60px',
    },
    movieTitle: {
        fontSize: '18px',
        fontWeight: '500',
        marginBottom: '10px',
    },
    pageNumber: {
        fontSize: 14,
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
      },
});

export default function AddMovieEs() {
    const { auth } = useAuth()
    const [CODUSER, setCODUSER] = useState(`${auth.COD}`);
    const [Tipo, setTipo] = useState("NULL");
    const [SelectType, setSelectType] = useState([]);
    const [fechaDesde, setFechaDesde] = useState("NULL");
    const [fechaHasta, setFechaHasta] = useState("NULL");
    const [pdfDocument, setPdfDocument] = useState(null);
    const [showPdf, setShowPdf] = useState(false);

    const mostrarDatos = async () => {
        try {
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const resultadost = await clienteAxios.get("/catypecontent", config).then((response) => {
                const st = response.data;
                setSelectType(st)
            });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        mostrarDatos();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const datos = { fechaDesde, fechaHasta, Tipo };
            const resultado = await clienteAxios.get(`/mtmovie/es/${import.meta.env.VITE_ID_MOVIES_ES}`, config).then((response) => {
                const Consulta = response.data;
                const total = Consulta.length;

                // Generar el documento PDF con los datos de la consulta
                const MyDocument = () => (
                    <Document>
                        <Page style={styles.page}>
                            <Text style={styles.title}>Listado de Contenido</Text>
                            {Consulta.map((pelicula, index) => (
                                <View key={pelicula.COD_CONTENT}>
                                    <Text style={styles.movieTitle}>{`${index + 1}.- ${pelicula.TITLE}`}</Text>
                                </View>
                            ))}
                            <View style={{ marginTop: '20px' }}>
                                <Text style={{ fontSize: '18px', fontWeight: '500', color: 'red' }}>{`Total: ${total}`}</Text>
                            </View>
                            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                                `${pageNumber} / ${totalPages}`
                            )} fixed />
                        </Page>
                    </Document>
                );

                // Almacenar el documento en una variable
                const pdfDocument = <MyDocument />;
                setPdfDocument(pdfDocument);
                setShowPdf(true);
            });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <div className="sm:flex sm:justify-between sm:items-center mb-8">
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-full px-4 pb-0">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-0 shadow-lg rounded-lg bg-blueGray-100 border-0">

                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mb-6">
                                            <div
                                                className=""
                                            >
                                            </div>
                                            <div className="flex flex-wrap">

                                                {/* tipo */}
                                                <div className="w-full lg:w-8/12 px-4 mb-6">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="appearance-none block w-full text-gray-700 borde rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        >
                                                            Tipo:
                                                        </label>
                                                        <select
                                                            name="TYPE"
                                                            id="TYPE"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={Tipo}
                                                            onChange={(e) => setTipo(e.target.value)}
                                                        >
                                                            <option value="">Selecciona el Tipo de reporte</option>
                                                            <option value="0">Todos el contenido multimedia</option>
                                                            {SelectType.map((item) => (
                                                                <option key={item.COD_CONTENIDO} value={item.COD_CONTENIDO}>{item.CONTENIDO}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* desde */}
                                                <div className="w-full lg:w-6/12 px-4 mb-6">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="appearance-none block w-full text-gray-700 borde rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        >
                                                            Desde:
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={fechaDesde}
                                                            onChange={(e) => setFechaDesde(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                {/* hasta */}
                                                <div className="w-full lg:w-6/12 px-4 mb-6">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="appearance-none block w-full text-gray-700 borde rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        >
                                                            Hasta:
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            value={fechaHasta}
                                                            onChange={(e) => setFechaHasta(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {pdfDocument && showPdf && (
                                <>
                                    <PDFDownloadLink document={pdfDocument} fileName="reporte.pdf">
                                        {({ blob, url, loading, error }) => (
                                            <a href={url} download="documento.pdf">
                                                {loading ? (
                                                    <span style={{ color: 'gray' }}>Generando PDF...</span>
                                                ) : (
                                                    <span style={{ color: 'blue', textDecoration: 'underline' }}>Descargar PDF</span>
                                                )}
                                            </a>
                                        )}
                                    </PDFDownloadLink>
                                    <button
                                        type="button"
                                        onClick={() => setShowPdf(false)}
                                        className="ml-2 py-2 px-4 bg-red-500 hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
                                    >
                                        Cerrar
                                    </button>
                                    <PDFViewer className="mt-4" width="1000" height="600">
                                        {pdfDocument}
                                    </PDFViewer>
                                </>
                            )}
                            {!showPdf && (
                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md py-2 px-4"
                                >
                                    Generar reporte
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}