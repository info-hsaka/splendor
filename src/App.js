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

    update(state) {
        const canvas = document.getElementById("canvas")
        const ctx = canvas.getContext("2d")
        // Reihe Seltenheit 1
        ctx.fillStyle = "rgb(248, 244, 236)"
        ctx.fillRect(15, 25, 100, 150)
        ctx.strokeRect(15, 25, 100, 150)

        function KarteMalen(i, karte) {
            if (karte.Farbe == "schwarz") {
                ctx.fillStyle = "rgb(46,41,65)"
            } else if (karte.Farbe == "rot") {
                ctx.fillStyle = "rgb(200,50,00"
            } else if (karte.Farbe == "gruen") {
                ctx.fillStyle = "rgb(80,200,120)"
            } else if (karte.Farbe == "weiss") {
                ctx.fillStyle = "rgb(248, 244, 236)"
            } else if (karte.Farbe == "blau") {
                ctx.fillStyle = "rgb(0 ,150,200)"
            }

            ctx.fillRect(125 + i * 110, 25, 100, 150)
            ctx.strokeRect(125 + i * 110, 25, 100, 150)
        }
        //state.G["reihe1"]
        for (let reihenname in ["reihe1", "reihe2", "reihe3"]) {
            for (let i in state.G[reihenname]) {
                const karte = state.G.reihe1[i]

                KarteMalen(i, karte)
            }
        }
    }
}

const appElement = document.getElementById("app")
const app = new GameClient(appElement)
