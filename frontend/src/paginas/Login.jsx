import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>

      <div>
        <h1 className="text-sky-800 font-black text-6xl">
          Bienvenido al Panel de Control de <br />
          <span className="text-black">TopMedia+</span>
        </h1>
      </div>
      <div className='mt-20 md:mt-5 shadow-2xl px-5 py-10 rounded-xl bg-white'>
        <form>
          <div className="my-8">
            <label
              className="uppercase mb-3 text-gray-600 block text-xl text-bold">
              Username:
            </label>
            <input type="text"
              name="user"
              placeholder="Tu Username"
              className="border w-full p-3 pt-3 bg-gray-50 rounded-xl"
              required
            />
          </div>

          <div className="my-5">
            <label
              className="uppercase mb-3 text-gray-600 block text-xl text-bold">
              Password:
            </label>
            <input type="text"
              name="pass"
              placeholder="Tu Password"
              className="border w-full p-3 pt-3 bg-gray-50 rounded-xl"
              required

            />
          </div>
          <input type="submit"
            value="Ingresar"
            className="bg-sky-800 hover:bg-sky-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer md:w-auto"
            href="/admin"
            />
        </form>

        <nav className='mt-10 lg:flex lg:justify-end'>
          <Link className='block text-center my-5 text-gray-500 hover:text-cyan-800' to="/olvide-password" >Olvidaste tu contraseña?</Link>
        </nav>
      </div>

    </>
  )
}

export default Login