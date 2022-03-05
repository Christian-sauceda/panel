import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const CatTypeContentContext = createContext()

export const CatTypeContentProvider = ({children}) => {

    const [typeContenido, setTypeContenido] = useState([])

    return (
        <CatTypeContentContext.Provider
            value={{
                typeContenido
            }}
        >
        {children}
        </CatTypeContentContext.Provider>
        
        )
}

export default CatTypeContentContext;