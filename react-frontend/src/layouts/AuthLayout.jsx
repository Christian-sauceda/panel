import { Outlet } from 'react-router-dom'

//components

//importar css
import "./AuthLayout.css";
const AuthLayout = () => {
    return (
        <>
            <main className="container mx-auto md:grid md:grid-cols-2 mt-24 gap-10 p-5 items-center">
            <Outlet />
            </main>

        </>
    )
}

export default AuthLayout;