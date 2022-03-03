import { Outlet } from 'react-router-dom'

//components
import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall";
//importar css
import "./AuthLayout.css";
const AuthLayout = () => {
    return (
        <>
            <Navbar transparent />
            <main>
                <section className="relative py-40 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full bg-color bg-image"
                    ></div>
                    <Outlet />
                    <FooterSmall absolute />
                </section>
            </main>

        </>
    )
}

export default AuthLayout;