import useCatContenido from "../../hooks/useContenido";

const ListadoTypeContent = () => {
    const { catContenido } = useCatContenido()
    console.log(catContenido)
    return (

        <div className="pt-10">
            <>
                { catContenido.length ? (
                    <>
                    <h2
                        className="font-black text-3xl text-center text-gray-800"
                        >Listado de Tipo de Contenido Agregado</h2>
                        <p
                        className="text-xl mt-5 mb-10 text-center"
                        >
                            Administra Los<apan className="text-indigo-600 font-bold"> Tipo de Contenido</apan>
                        </p>
                    </>
                ) : 
                (
                    <>
                        <h2
                        className="font-black text-3xl text-center text-gray-800"
                        >No hay Tipo de Contenido Agregado</h2>
                        <p
                        className="text-xl mt-5 mb-10 text-center"
                        >
                            Agrega un Nuevo tipo de Contenido <apan className="text-indigo-600 font-bold"> Y Aparecerá Aquí</apan>
                        </p>
                    </>
                )}
            </>
        </div>
    )
}

export default ListadoTypeContent