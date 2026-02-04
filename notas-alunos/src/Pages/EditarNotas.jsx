import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function EditarNotas() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [aluno, setAluno] = useState(null)
  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    async function carregarAluno() {
      const res = await fetch(`http://localhost:3000/alunos/${id}`)
      const data = await res.json()

      setAluno(data)
      setDisciplinas(JSON.parse(JSON.stringify(data.disciplinas)))
    }

    carregarAluno()
  }, [id])

  function alterarNota(index, campo, valor) {
    const copia = [...disciplinas]
    copia[index][campo] = Number(valor)
    setDisciplinas(copia)
  }

  async function salvar() {
    const alunoAtualizado = {
      ...aluno,
      disciplinas
    }

    try {
      const res = await fetch(`http://localhost:3000/alunos/${id}`, {
        method: "PUT", //atualiza os dados no arquivo .json 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(alunoAtualizado)
      })

      if (!res.ok) throw new Error()

      navigate(`/aluno/${id}`)
    } catch {
      alert("Erro ao salvar")
    }
  }

  if (!aluno) return <p>Carregando...</p>

  return (
    <div className="p-6">
      <h1 className="text-7xl font-bold mb-6">
        Editar notas – {aluno.nome}
      </h1>

      {disciplinas.map((d, index) => (
        <div key={index} className="mb-2">
          <h2 className="text-2xl font-bold mb-3">
            {d.nome} (V1/V2/V3)
          </h2>

          <div className="flex gap-4">
            {["v1", "v2", "v3"].map(campo => (
              <input
                key={campo}
                type="number"
                min="0"
                max="10"
                step="0.1"
                value={d[campo]}
                onChange={(e) => { // mantem os valores de 0 a 10 e com 2 decimais no máximo
                  let valor = Number(e.target.value)
                  if (valor < 0) valor = 0
                  if (valor > 10) valor = 10
                  valor = Number(valor.toFixed(1))
                  alterarNota(index, campo, valor)
                }}
                className="w-20 p-1 text-black bg-white border-2 border-blue-700 rounded-md"
              />
            ))}
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
