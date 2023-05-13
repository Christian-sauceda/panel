import { Link } from "react-router-dom";
const OlvidePassword = () => {
  return (
    <>
      <div>
        <h1 className="text-sky-600 font-black text-6xl">
          Recupera tu Acceso a
          <span className="text-black"> TopMedia+</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form>
          <div className="my-5 pt-16 md:pt-0 md:mt-20">
            <label
              className="uppercase text-gray-600 block text-xl font-bold">
              Tu Correo Electrónico:
            </label>
            <input
              type="email"
              placeholder="Tu Correo Electrónico"
              className="border w-full p-3 rounded-xl mt-3 bg-gray-100"
            />
          </div>
          <input
            type="submit"
            value="Enviar Instrucciones"
            className="bg-sky-600 w-full py-3 px-10 rounded-xl mt-6 text-white uppercase font-bold hover:cursor-pointer hover:bg-sky-700 md:w-auto "
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-end">
                    <Link
                    className="block text-center my-5 text-gray-500"
                        to="/"
                    >Regresar
                    </Link>
                </nav>
      </div>
    </>
  )
}

export default OlvidePassword