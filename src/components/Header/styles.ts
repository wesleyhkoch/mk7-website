import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 5rem;

  color: #fff;
  background: #171717;

  overflow: hidden;
`

export const NavLinks = styled.nav`
  margin-left: 5rem;
  height: 5rem;

  a {
    display: inline-block;
    text-decoration: none;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: gray;

    transition: color 0.2s;

    & + a {
      margin-left: 2rem;
    }

    &:hover {
      color: #fff;
    }

    &.active {
      color: #fff;
      font-weight: bold;
    }

    &.active::after {
      content: "";
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;

      background: red;
    }
  }
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 1rem;
  margin-right: 5rem;
  margin-left: 4rem;
`
