import { GiEvilEyes } from "react-icons/gi"

import { Container, MainText } from "./styles"

export const Home = () => {
  return (
    <Container>
      <MainText>
        <h1>
          <span>Bem</span>-vindo!
        </h1>
        <h2>
          Acabas de entrar no mundo <span>daqueles que tudo veem</span>!
        </h2>
      </MainText>
      <GiEvilEyes size={750} />
    </Container>
  )
}
