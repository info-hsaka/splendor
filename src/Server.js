import { Server, Origins } from "boardgame.io/server"
import { Game } from "./Game"

const server = Server({
  games: [Game],
  origins: [/.*/],
})

server.run(8000)
