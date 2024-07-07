import { Client } from "boardgame.io/client"
import { Local, SocketIO } from "boardgame.io/multiplayer"
import { Game } from "./Game"

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
    this.rootElement = rootElement;
    this.createBoard();
    this.attachListeners();
  }

  attachListeners() {}
  createBoard() {}
  update(state) {}
}

new GameClient()
