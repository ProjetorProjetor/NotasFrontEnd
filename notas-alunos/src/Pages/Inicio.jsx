import { Link } from "react-router-dom"
import alunos from "../data/alunos.json" // sem banco de dados ainda, então por hora dados editados só mudam na aparência

export default function Inicio() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Alunos</h1>

      <ul className="space-y-2">
        {alunos.map(aluno => (
          <li key={aluno.id}>
            <Link
              to={`/aluno/${aluno.id}`}
              className="text-blue-400 hover:underline"
            >
              {aluno.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
