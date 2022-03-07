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
import ManCatAudio from './pages/admin/Mantenimientos/ManCatAudio'
import ManCatContent from './pages/admin/Mantenimientos/ManCatContent'
//providers
import { AuthProvider } from './context/AuthProvider'
import { CatContenidoProvider } from './context/CatContenidoProvider'

function App() {


  return (
    <BrowserRouter>
    <AuthProvider>
    <CatContenidoProvider>
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
          <Route path="cat/content" element={<ManCatContent />} />    
        </Route>
      </Routes>
      </CatContenidoProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
