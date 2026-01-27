import { useNavigate } from "react-router-dom"

export default function BotaoVoltar() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate("/")} //sempre retorna a pagina Inicio, que tem o path "/"
      className="mb-4 rounded bg-gray-700 ml-10 px-4 py-2 text-white hover:bg-gray-600 transition"
    >
      ← Voltar
    </button>
  )
}
