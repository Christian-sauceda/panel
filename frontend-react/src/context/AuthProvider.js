import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    
    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            if(!token) return
            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` 
                }
            }
            try {
                const url = `http://localhost:3001/cataudio`
                const { data } = await axios.get(url, config);
                setAuth(data)
            } catch (error) {
                console.log(error.response.data.message)
                setAuth({})
            }
        }
        autenticarUsuario()
    }, [])

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;