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
import ManCatFormato from './pages/admin/Mantenimientos/ManCatFormato'
import ManCatContenido from './pages/admin/Mantenimientos/ManCatContenido'
import ManCatCalidad from './pages/admin/Mantenimientos/ManCatCalidad'

//providers
import { AuthProvider } from './context/AuthProvider'
import { AudiosProvider } from './context/AudiosProvider'
import { FormatosProvider } from './context/FormatosProvider'
import { ContenidosProvider } from './context/ContenidosProvider'
import { CalidadesProvider } from './context/CalidadesProvider'


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AudiosProvider>
          <FormatosProvider>
            <ContenidosProvider>
              <CalidadesProvider>
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
                    <Route path="cat/formato" element={<ManCatFormato />} />
                    <Route path="cat/contenido" element={<ManCatContenido />} />
                    <Route path="cat/calidad" element={<ManCatCalidad />} />
                  </Route>
                </Routes>
              </CalidadesProvider>
            </ContenidosProvider>
          </FormatosProvider>
        </AudiosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
