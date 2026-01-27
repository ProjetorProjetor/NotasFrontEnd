import { useParams, Link } from "react-router-dom"
import alunos from "../data/alunos.json" // sem banco de dados ainda, então por hora dados editados só mudam na aparência
import BotaoVoltar from "../Components/BotaoVoltar"

export default function Aluno() {
  const { id } = useParams()
  const aluno = alunos.find(a => a.id === Number(id))

  if (!aluno) {
    return <p className="p-6">Aluno não encontrado</p> 
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{aluno.nome}</h1>
        
      <table className="w-full border border-white/20 mb-4">
        <thead>
          <tr className="bg-white/10">
            <th className="p-2">Disciplina</th>
            <th className="p-2">V1</th>
            <th className="p-2">V2</th>
            <th className="p-2">V3</th>
          </tr>
        </thead>
        <tbody>
          {aluno.disciplinas.map((d, index) => (
            <tr key={index} className="border-t border-white/10"> {/* utiliza os valores do .json */}
              <td className="p-2">{d.nome}</td> 
              <td className="p-2 text-center">{d.v1}</td>
              <td className="p-2 text-center">{d.v2}</td>
              <td className="p-2 text-center">{d.v3}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link
        to={`/aluno/${aluno.id}/editar`} //manda para edição das notas do aluno com id equivalente
        className="inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Editar notas
      </Link>
      <BotaoVoltar />
    </div>
  )
}
