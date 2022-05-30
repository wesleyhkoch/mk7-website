import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { FaTwitch, FaYoutube, FaInstagram } from "react-icons/fa"
import { GiEvilEyes } from "react-icons/gi"

import logoImg from "../../assets/mk7-icon.png"

import { Container, NavLinks, SocialLinks } from "./styles"

export const Header = () => {
  const [pathname, setPathname] = useState("")
  const { pathname: locationPathname } = useLocation()

  useEffect(() => {
    setPathname(locationPathname)
  }, [locationPathname])

  return (
    <Container>
      <NavLinks>
        <Link to='/' className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to='/members' className={pathname === "/members" ? "active" : ""}>
          Members
        </Link>
      </NavLinks>
      <GiEvilEyes size={100} />
      <SocialLinks>
        <FaTwitch size={30} />
        <FaYoutube size={30} />
        <FaInstagram size={30} />
      </SocialLinks>
    </Container>
  )
}
