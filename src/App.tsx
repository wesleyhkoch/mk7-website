import { BrowserRouter } from "react-router-dom"

import { Header } from "./components/Header"
import { AppRoute } from "./routes"
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoute />
      <GlobalStyle />
    </BrowserRouter>
  )
}
