import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Authlayout from './layout/Authlayout'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import ConfimarCuenta from './paginas/ConfirmarCuenta'
import Notfaund from './paginas/Notfound'
import Slidebar from './components/slidebar/Slidebar'
function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/*" element={<Notfaund />} />
        <Route path="/" element={<Authlayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="confirmar-cuenta/:id" element={<ConfimarCuenta />} />
        </Route>
        <Route path="/inicio" element={<Slidebar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
