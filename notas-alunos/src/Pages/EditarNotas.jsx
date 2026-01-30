import { useParams, useNavigate } from "react-router-dom"
import alunos from "../data/alunos.json" // sem banco de dados ainda, então por hora dados editados só mudam na aparência
import { useState } from "react"

export default function EditarNotas() {
  const { id } = useParams()
  const navigate = useNavigate()

  const aluno = alunos.find(a => a.id === Number(id)) 
  const [disciplinas, setDisciplinas] = useState(
    JSON.parse(JSON.stringify(aluno.disciplinas))
  )

  function alterarNota(index, campo, valor) {
    const copia = [...disciplinas]
    copia[index][campo] = Number(valor)
    setDisciplinas(copia)
  }

  function salvar() {
    aluno.disciplinas = disciplinas
    navigate(`/aluno/${aluno.id}`)
  }

  return (
    <div className="p-6">
      <h1 className="text-7xl font-bold mb-6">
        Editar notas – {aluno.nome}
      </h1>

      {disciplinas.map((d, index) => (
        <div key={index} className="mb-2">
          <h2 className="text-2xl font-bold mb-3">{d.nome} (V1/V2/V3)</h2>

          <div className="flex gap-4">
            <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={d.v1}
            onChange={(e) => {
              let valor = Number(e.target.value)
              if (valor < 0) valor = 0
              if (valor > 10) valor = 10
              valor = valor.toFixed(1)
              alterarNota(index, "v1", valor)
  }} className="w-20 p-1 text-black bg-white border-2 border-blue-700 rounded-md"
/>

            <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={d.v2}
            onChange={(e) => {
              let valor = Number(e.target.value)
              if (valor < 0) valor = 0
              if (valor > 10) valor = 10
              valor = valor.toFixed(1)
              alterarNota(index, "v2", valor)
  }} className="w-20 p-1 text-black bg-white border-2 border-blue-700 rounded-md"
/>
            <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={d.v3}
            onChange={(e) => {
              let valor = Number(e.target.value)
              if (valor < 0) valor = 0
              if (valor > 10) valor = 10
              valor = valor.toFixed(1)
              alterarNota(index, "v3", valor)
  }} className="w-20 p-1 text-black bg-white border-2 border-blue-700 rounded-md"
/>
          </div>
        </div>
      ))}

      <button
        onClick={salvar}
        className="bg-green-800 px-4 py-2 rounded-md hover:bg-green-700"
      >
        Salvar
      </button>
    </div>
  )
}
