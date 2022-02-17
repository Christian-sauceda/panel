import { Link } from 'react-router-dom'
function OlvidePassword() {
  return (
    <>

      <div>
        <h1 className="text-sky-800 font-black text-6xl">
          Recupera tu contraseña de<br />
          <span className="text-black">TopMedia+</span>
        </h1>
      </div>
      <div className='mt-20 md:mt-5 shadow-2xl px-5 py-10 rounded-xl bg-white'>
        <form>
          <div className="my-8">
            <label
              className="uppercase text-gray-600 block text-xl text-bold mb-3">
              Email:
            </label>
            <input type="email"
              name="email"
              placeholder="Tu Email del Registro"
              className="border w-full p-3 pt-3 bg-gray-50 rounded-xl"
              required
            />
          </div>
          <input type="submit"
            value="Enviar Instrucciones"
            className="bg-sky-800 hover:bg-sky-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer md:w-auto " 
              
            />
          </form>
          <nav className='mt-10 lg:flex lg:justify-end'>
          <Link className='block text-center my-5 text-gray-500' to="/" >Iniciar Sesión</Link>
        </nav>
          </div>
    </>
  )
}

export default OlvidePassword