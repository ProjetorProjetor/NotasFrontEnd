import { Link } from "react-router-dom"
import alunos from "../data/alunos.json" // sem banco de dados ainda, então por hora dados editados só mudam na aparência

export default function Inicio() {
  return (
    <div className="p-6">
      <h1 className="text-7xl font-bold mb-10">Lista de Alunos</h1>

      <ul className="space-y-11">
        {alunos.map(aluno => (
          <li key={aluno.id}>
            <Link
              to={`/aluno/${aluno.id}`} //direciona a pagina especifica do aluno dependendo do id
              className="text-3xl bg-blue-800 p-2 rounded-md hover:bg-blue-700"
            >
              {aluno.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
