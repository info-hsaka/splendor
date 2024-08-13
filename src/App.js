import { Client } from "boardgame.io/client"
import { Local, SocketIO } from "boardgame.io/multiplayer"
import { resetOnClicks } from "./canvas"
import { Game } from "./Game"

const isMultiplayer = import.meta.env.VITE_REMOTE === "true"

const multiplayer = isMultiplayer
    ? SocketIO({ server: "localhost:8000" })
    : Local()

class GameClient {
    constructor(rootElement) {
        this.rootElement = rootElement

        this.client = Client({
            game: Game,
        })

        this.client.subscribe((state) => this.update(state))
        this.client.start()
    }

    update(state) {}
}

const appElement = document.getElementById("app")
const app = new GameClient(appElement)
