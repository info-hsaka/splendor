import { Client } from "boardgame.io/client"
import { Local, SocketIO } from "boardgame.io/multiplayer"
import { Game } from "./Game"
import {resetOnClicks} from "./canvas";

const multiplayer = import.meta.env.VITE_REMOTE === "true"
  ? SocketIO({ server: "localhost:8000" })
  : Local()

class GameClient {
  constructor() {
    this.client = Client({
      game: Game,
      multiplayer,
    })

    this.client.subscribe((state) => this.update(state))
    this.client.start()
  }

  update(state) {
    // We need to reset all the onClick handlers
    resetOnClicks()
    // draw the state here:
  }
}

new GameClient()
