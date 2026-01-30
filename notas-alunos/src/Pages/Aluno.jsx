import { useParams, Link } from "react-router-dom"
import alunos from "../data/alunos.json" // sem banco de dados ainda, então por hora dados editados só mudam na aparência
import BotaoVoltar from "../Components/BotaoVoltar"

function calcularMedia(v1, v2, v3) {
  const notas = [v1, v2, v3].map(Number)

  const soma = notas.reduce((acc, n) => acc + n, 0)
  return Number((soma / notas.length).toFixed(1))
}

export default function Aluno() {
  const { id } = useParams()
  const aluno = alunos.find(a => a.id === Number(id))

  if (!aluno) {
    return <p className="p-6">Aluno não encontrado</p> 
  }

  return (
    <div className="p-6">
      <h1 className="text-7xl font-bold mb-8">{aluno.nome}</h1>

      {aluno.disciplinas.map((d) => {
  const media = calcularMedia(d.v1, d.v2, d.v3)
  const aprovado = media >= 7

  return (
    <div
      key={d.nome}
      className="mb-4 rounded flex items-center gap-6 w-1/3 bg-slate-800 p-4"
    >
      <h2 className="text-lg font-bold">{d.nome}</h2>

      <p><strong>V1:</strong> {d.v1}</p>
      <p><strong>V2:</strong> {d.v2}</p>
      <p><strong>V3:</strong> {d.v3}</p>

      <div
        className={`mt-3 rounded p-2 text-center font-semibold
          ${aprovado ? "bg-green-600" : "bg-red-600"}`}
      >
        Média Final: {media} — {aprovado ? "Aprovado" : "Reprovado"}
      </div>
    </div>
  )
})}


      <Link
        to={`/aluno/${aluno.id}/editar`} //manda para edição das notas do aluno com id equivalente
        className="inline-block bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Editar notas
      </Link>
      <BotaoVoltar />
    </div>
  )
}
