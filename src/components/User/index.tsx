import { FaTwitch, FaYoutube, FaInstagram, FaUserSecret } from "react-icons/fa"

import { Card, Icons } from "./styles"

interface UserProps {
  name: string
  years: number
  role: string
  TwitchUser?: string
  YoutubeUser?: string
  InstagramUser?: string
}

export const User = (user: UserProps) => {
  return (
    <Card>
      <FaUserSecret size={100} />
      <h1>{user.name}</h1>
      <h2>{user.years} anos</h2>
      <hr
        style={{ width: "256px", marginTop: "1rem", marginBottom: "1rem" }}
      ></hr>
      <h3>{user.role}</h3>
      <Icons>
        <a href={`https://twitch.tv/${user.TwitchUser}`} target='_blank'>
          <FaTwitch size={20} />
        </a>
        <a
          href={`https://youtube.com/channel/${user.YoutubeUser}`}
          target='_blank'
        >
          <FaYoutube size={20} />
        </a>
        <a href={`https://instagram.com/${user.InstagramUser}`} target='_blank'>
          <FaInstagram size={20} />
        </a>
      </Icons>
    </Card>
  )
}
