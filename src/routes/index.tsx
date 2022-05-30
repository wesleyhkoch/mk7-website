import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Members } from "../pages/Members"

export const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/members' element={<Members />} />
    </Routes>
  )
}
