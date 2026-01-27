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
      <h1 className="text-xl font-bold mb-4">
        Editar notas – {aluno.nome}
      </h1>

      {disciplinas.map((d, index) => (
        <div key={index} className="mb-4">
          <h2 className="font-semibold mb-2">{d.nome}</h2>

          <div className="flex gap-2">
            <input
              type="number"
              value={d.v1}
              onChange={e => alterarNota(index, "v1", e.target.value)}
              className="w-20 p-1 text-black"
            />
            <input
              type="number"
              value={d.v2}
              onChange={e => alterarNota(index, "v2", e.target.value)}
              className="w-20 p-1 text-black"
            />
            <input
              type="number"
              value={d.v3}
              onChange={e => alterarNota(index, "v3", e.target.value)}
              className="w-20 p-1 text-black"
            />
          </div>
        </div>
      ))}

      <button
        onClick={salvar}
        className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
      >
        Salvar
      </button>
    </div>
  )
}
