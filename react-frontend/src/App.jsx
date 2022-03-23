import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import AdminLayout from './layouts/AdminLayout'

import Login from './pages/Auth/Login'
import Registrar from './pages/Auth/Registrar'
import OlvidePassword from './pages/Auth/OlvidePassword'
import ConfirmarCuenta from './pages/Auth/ConfirmarCuenta'

import Inicio from './pages/admin/Inicio.jsx'
import NotFound from './pages/admin/NotFound'

//add
import AddMovieEs from './pages/admin/AddMovieEs'
import AddMovieEn from './pages/admin/AddMovieEn'
import AddMovieAdult from './pages/admin/AddMovieAdults'
import AddEvent from './pages/admin/AddEvent'
import AddCapSerieEs from './pages/admin/AddCapSerieEs'
import AddCapSerieEn from './pages/admin/AddCapSerieEn'
import AddSerieEs from './pages/admin/AddSerieEs'
import AddSerieEn from './pages/admin/AddSerieEn'
import AddTvEs from './pages/admin/AddTvEs'
import AddTvEn from './pages/admin/AddTvEn'
import AddTvInter from './pages/admin/AddTvInter'

//list
import ListMovieEs from './pages/admin/ListMovieEs'
import ListMovieEn from './pages/admin/ListMovieEn'
import ListMovieAdult from './pages/admin/ListMovieAdulto'
import ListSeriesEs from './pages/admin/ListSeriesEs'
import ListSeriesEn from './pages/admin/ListSeriesEn'
import ListEventos from './pages/admin/ListEventos'
import ListTvEs from './pages/admin/ListTvEs'
import ListTvEn from './pages/admin/ListTvEn'
import ListTvInter from './pages/admin/ListTvInter'
import ListUsers from './pages/admin/ListUsers'

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
                    <Route path="*" element={<NotFound />} />
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
                        <Route path="events/add" element={<AddEvent />} />
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
                        <Route path="tv/en/add" element={<AddTvEn />} />
                        <Route path="tv/inter/add" element={<AddTvInter />} />
                        <Route path="movie/es/list" element={<ListMovieEs />} />
                        <Route path="movie/en/list" element={<ListMovieEn />} />
                        <Route path="movie/adult/list" element={<ListMovieAdult />} />
                        <Route path="series/es/list" element={<ListSeriesEs />} />
                        <Route path="tvshow/en/list" element={<ListSeriesEn />} />
                        <Route path="events/list" element={<ListEventos />} />
                        <Route path="users/list" element={<ListUsers />} />
                        <Route path="tv/es/list" element={<ListTvEs />} />
                        <Route path="tv/en/list" element={<ListTvEn />} />
                        <Route path="tv/inter/list" element={<ListTvInter />} />
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
