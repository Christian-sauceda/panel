import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div>
                <h1 className="text-sky-600 font-black text-6xl">
                    Inicia Sesión y Administra el Contenido de 
                    <span className="text-black"> TopMedia+</span>
                </h1>
            </div>
            <div>
                <form>
                    <div className="my-5 pt-16 md:pt-0 md:mt-20">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Nombre Usuario:
                        </label>
                        <input
                            type="text"
                            placeholder="Tu Nombre de Usuario"
                            className="border w-full p-3 rounded-xl mt-3 bg-gray-100"
                        />
                    </div>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            placeholder="Tu Contraseña"
                            className="border w-full p-3 rounded-xl mt-3 bg-gray-100"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Iniciar Sesión"
                        className="bg-sky-600 w-full py-3 px-10 rounded-xl mt-6 text-white uppercase font-bold hover:cursor-pointer hover:bg-sky-700 md:w-auto "
                    />
                </form>
                <nav className="mt-10 lg:flex lg:justify-end">
                    <Link
                    className="block text-center my-5 text-gray-500"
                        to="olvide-password"
                    >Recuperar Contraseña
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Login;
