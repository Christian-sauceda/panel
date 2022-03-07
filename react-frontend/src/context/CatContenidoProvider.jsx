import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const CatContenidoContext = createContext()

export const CatContenidoProvider = ({ children }) => {

    const [catContenido, setCatContenido] = useState([])
    const [catcontent, setCatcontent] = useState({})

    useEffect(() => {
        const obternerCatContenido = async () => {
            try {
                const token = localStorage.getItem("token")
                if (!token) return
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
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        if (catcontent.COD_TYPE_CONTENT) {
            try {
                const { data } = await clienteAxios.put(`/catypecontent/${catcontent.COD_TYPE_CONTENT}`, contenido, config)

                const contenidoActualizado = catContenido.map( contenidoState => contenidoState.COD_TYPE_CONTENT ===
                    data.COD_TYPE_CONTENT ? data : contenidoState)
                    setCatContenido(contenidoActualizado)
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const { data } = await clienteAxios.post('/catypecontent',
                    contenido, config)
                const { ...contenidoAlmacenado } = data
                setCatContenido([contenidoAlmacenado, ...catContenido])
            } catch (error) {
                console.log(error.response.data.message)
            }
        }
    }

    const setEdicion = (contenido) => {
        setCatcontent(contenido)
    }

    const eliminarContenido = async id => {
        const confirmar = confirm('Confirma que deseas eliminar')
        if(confirmar) {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.delete(`/catypecontent/${id}`,config)
                const contenidoActualizado = catContenido.filter( contenidoState => contenidoState.COD_TYPE_CONTENT!==id)
                setCatContenido(contenidoActualizado)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <CatContenidoContext.Provider
            value={{
                catContenido,
                guardarCatContenido,
                setEdicion,
                catcontent,
                eliminarContenido
            }}>
            {children}
        </CatContenidoContext.Provider>
    )
}

export default CatContenidoContext