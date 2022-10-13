import { App } from "@components/App"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
