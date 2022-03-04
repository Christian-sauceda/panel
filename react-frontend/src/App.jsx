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

//cat
import ManCatAudio from './pages/admin/ManCatAudio'

import { AuthProvider } from './context/AuthProvider'

function App() {


  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Inicio />} />
          <Route path="movie/es/add" element={<AddMovieEs />} />
          <Route path="user/registrar" element={<Registrar />} />
          <Route path="cat/audio" element={<ManCatAudio />} />
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
