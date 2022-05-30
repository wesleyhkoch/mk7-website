import { FaTwitch, FaYoutube, FaInstagram, FaUserSecret } from "react-icons/fa"

import { Card, Icons } from "./styles"

export const User = () => {
  return (
    <Card>
      <FaUserSecret size={100} />
      <h1>$Gama</h1>
      <h2>18 anos</h2>
      <hr
        style={{ width: "256px", marginTop: "1rem", marginBottom: "1rem" }}
      ></hr>
      <h3>Co-Founder, idealizador e developer</h3>
      <Icons>
        <FaTwitch size={20} />
        <FaYoutube size={20} />
        <FaInstagram size={20} />
      </Icons>
    </Card>
  )
}
