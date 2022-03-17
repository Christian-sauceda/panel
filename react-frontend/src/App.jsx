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
import AddMovieEn from './pages/admin/AddMovieEn'
import AddMovieAdult from './pages/admin/AddMovieAdults'
import AddCapSerieEs from './pages/admin/AddCapSerieEs'
import AddCapSerieEn from './pages/admin/AddCapSerieEn'
import AddSerieEs from './pages/admin/AddSerieEs'
import AddSerieEn from './pages/admin/AddSerieEn'
import AddTvEs from './pages/admin/AddTvEs'

//cat
import ManCatAudio from './pages/admin/Mantenimientos/ManCatAudio'
import ManCatFormato from './pages/admin/Mantenimientos/ManCatFormato'
import ManCatContenido from './pages/admin/Mantenimientos/ManCatContenido'
import ManCatCalidad from './pages/admin/Mantenimientos/ManCatCalidad'
import ManCatPlataforma from './pages/admin/Mantenimientos/ManCatPlataforma'
import ManCatCategoria from './pages/admin/Mantenimientos/ManCatCategoria'

//providers
import { AuthProvider } from './context/AuthProvider'
import { AudiosProvider } from './context/AudiosProvider'
import { FormatosProvider } from './context/FormatosProvider'
import { ContenidosProvider } from './context/ContenidosProvider'
import { CalidadesProvider } from './context/CalidadesProvider'
import { PlataformasProvider } from './context/PlataformasProvider'
import { CategoriasProvider } from './context/CategoriasProvider'


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AudiosProvider>
          <FormatosProvider>
            <ContenidosProvider>
              <CalidadesProvider>
                <PlataformasProvider>
                  <CategoriasProvider>
                    <Routes>
                      <Route path="/" element={<AuthLayout />}>
                        <Route index element={<Login />} />
                        <Route path="olvide-password" element={<OlvidePassword />} />
                        <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
                      </Route>

                      <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Inicio />} />
                        <Route path="movie/es/add" element={<AddMovieEs />} />
                        <Route path="movie/en/add" element={<AddMovieEn />} />
                        <Route path="movie/adult/add" element={<AddMovieAdult />} />
                        <Route path="series/es/add" element={<AddSerieEs />} />
                        <Route path="series/es/addcap" element={<AddCapSerieEs />} />
                        <Route path="tvshow/en/addcap" element={<AddCapSerieEn />} />
                        <Route path="tvshow/en/add" element={<AddSerieEn />} />
                        <Route path="user/registrar" element={<Registrar />} />
                        <Route path="cat/audio" element={<ManCatAudio />} />
                        <Route path="cat/formato" element={<ManCatFormato />} />
                        <Route path="cat/contenido" element={<ManCatContenido />} />
                        <Route path="cat/calidad" element={<ManCatCalidad />} />
                        <Route path="cat/plataforma" element={<ManCatPlataforma />} />
                        <Route path="cat/categoria" element={<ManCatCategoria />} />
                        <Route path="tv/es/add" element={<AddTvEs />} />
                      </Route>
                    </Routes>
                  </CategoriasProvider>
                </PlataformasProvider>
              </CalidadesProvider>
            </ContenidosProvider>
          </FormatosProvider>
        </AudiosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
