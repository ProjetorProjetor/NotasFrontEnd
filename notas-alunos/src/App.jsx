import { BrowserRouter, Routes, Route } from "react-router-dom"

import Inicio from "./Pages/Inicio.jsx"
import Aluno from "./Pages/Aluno.jsx"
import EditarNotas from "./Pages/EditarNotas.jsx"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/aluno/:id" element={<Aluno />} /> {/* Aluno e EditarNotas mudam de acordo com o id */}
          <Route path="/aluno/:id/editar" element={<EditarNotas />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
