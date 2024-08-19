import { Server } from "boardgame.io/server"
import serve from "koa-static"
import { Cascadia } from "./cascadia"

function makeId(length) {
  let result = ""
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

const server = Server({
  games: [Cascadia],
  origins: [/.*/],
  uuid: () => makeId(6),
  generateCredentials: () => makeId(64),
})

server.app.use(serve("dist"))

server.run(process.env.PORT ?? 8000)
