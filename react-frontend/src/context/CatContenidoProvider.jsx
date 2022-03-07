import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const CatContenidoContext = createContext()

export const CatContenidoProvider = ({ children }) => {

    const [catContenido, setCatContenido] = useState([])

    useEffect(() => {
        const obternerCatContenido = async () => {
            try {
                const token = localStorage.getItem("token")
                if(!token) return
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.get("/catypecontent", config)
                setCatContenido(data)
            } catch (error) {
                console.log(error)
            }
        }
        obternerCatContenido()
    }, [])

    const guardarCatContenido = async (contenido) => {
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }

            }
            const { data } = await clienteAxios.post('/catypecontent',
                contenido, config)
            setCatContenido([data])
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <CatContenidoContext.Provider
            value={{
                catContenido,
                guardarCatContenido
            }}>
            {children}
        </CatContenidoContext.Provider>
    )
}

export default CatContenidoContext