import { User } from "../../components/User"

import { Container } from "./styles"

export const Members = () => {
  const users = [
    {
      name: "TW",
      years: 22,
      role: "Founder",
      TwitchUser: "twenty7k",
      YoutubeUser: "twenty7k",
      InstagramUser: "twenty7k",
    },
    {
      name: "$Gama",
      years: 18,
      role: "Co-Founder, idealizador e desenvolvedor",
      TwitchUser: "gamafps1",
      YoutubeUser: "gamafps1",
      InstagramUser: "gamafps1",
    },
  ]
  return (
    <Container>
      {users.map((user) => {
        return (
          <User
            name={user.name}
            years={user.years}
            role={user.role}
            TwitchUser={user.TwitchUser}
            YoutubeUser={user.YoutubeUser}
            InstagramUser={user.InstagramUser}
          />
        )
      })}
    </Container>
  )
}
