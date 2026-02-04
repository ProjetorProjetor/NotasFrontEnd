import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Inicio() {
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/alunos") //pega os dados dos alunos no servidor
      .then(res => res.json())
      .then(data => setAlunos(data))
      .catch(err => console.error("Erro ao buscar alunos:", err))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-7xl font-bold mb-10">
        Lista de Alunos
      </h1>

      <ul className="space-y-11">
        {alunos.map(aluno => (
          <li key={aluno.id}>
            <Link
              to={`/aluno/${aluno.id}`} //apresenta um link para aluno específico dependendo do id
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
