import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> {/* bom para perceber erros no código */}
    <App />
  </React.StrictMode>
)