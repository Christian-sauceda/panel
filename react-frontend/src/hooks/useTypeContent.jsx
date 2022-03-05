import { useContext } from "react"
import CatTypeContentContext from "../context/CatTypeContenidoProvider"

const useCatContent = () => {
    return useContext(CatTypeContentContext)
}

export default useCatContent;