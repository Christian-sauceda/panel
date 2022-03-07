import { useContext } from "react"
import CatContenidoContext from "../context/CatContenidoProvider"

const useCatContenido = () => {
    return useContext(CatContenidoContext)
}

export default useCatContenido;