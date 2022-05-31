import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 2rem 1rem;
  margin: 5rem 2.5rem 2.5rem 5rem;
  color: white;
  border-radius: 10px;
  background-color: #171717;
  width: 100%;
  max-width: 256px;
  height: 404px;

  h1 {
    color: red;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;

  a {
    color: red;
  }
`
