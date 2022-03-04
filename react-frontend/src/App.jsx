import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import AdminLayout from './layouts/AdminLayout'

import Login from './pages/Auth/Login'
import Registrar from './pages/Auth/Registrar'
import OlvidePassword from './pages/Auth/OlvidePassword'
import ConfirmarCuenta from './pages/Auth/ConfirmarCuenta'

import Inicio from './pages/admin/Inicio.jsx'

//add
import AddMovieEs from './pages/admin/AddMovieEs'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Inicio />} />
          <Route path="movie/es/add" element={<AddMovieEs />} />
          <Route path="user/registrar" element={<Registrar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
