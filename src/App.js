import { Client } from "boardgame.io/client";
import { Local, SocketIO } from "boardgame.io/multiplayer";
import { resetOnClicks } from "./canvas";
import { Game } from "./Game";
import { Debug } from "boardgame.io/debug";

const isMultiplayer = import.meta.env.VITE_REMOTE === "true";
const multiplayerServer =
  import.meta.env.VITE_MUTLIPLAYER_SERVER ?? "localhost:8000";

const multiplayer = isMultiplayer
  ? SocketIO({ server: multiplayerServer })
  : Local();

class GameClient {
  constructor(rootElement) {
    this.rootElement = rootElement;

    this.client = Client({
      game: Game,
      multiplayer: isMultiplayer ? multiplayer : undefined,
      debug: {
        collapseOnLoad: false,
        hideToggleButton: false,
        impl: Debug,
      },
    });

    this.client.subscribe((state) => this.update(state));
    this.client.start();
  }

    update(state) {
        const canvas = document.getElementById("canvas")
        const ctx = canvas.getContext("2d")
        // Reihe Seltenheit 1
        ctx.fillStyle = "rgb(75, 139, 59)"
        ctx.fillRect(5, 25, 100, 150)
        ctx.strokeRect(5, 25, 100, 150)

        ctx.fillStyle = "rgb(184, 156, 80)"
        ctx.fillRect(5, 185, 100, 150)
        ctx.strokeRect(5, 185, 100, 150)

        ctx.fillStyle = "#003781"
        ctx.fillRect(5, 345, 100, 150)
        ctx.strokeRect(5, 345, 100, 150)

        function KarteMalen(i, j, karte) {
            if (karte.farbe == "schwarz") {
                ctx.fillStyle = "rgb(46,41,65)"
            } else if (karte.farbe == "rot") {
                ctx.fillStyle = "rgb(200,50,00"
            } else if (karte.farbe == "gruen") {
                ctx.fillStyle = "rgb(80,200,120)"
            } else if (karte.farbe == "weiss") {
                ctx.fillStyle = "rgb(248, 244, 236)"
            } else if (karte.farbe == "blau") {
                ctx.fillStyle = "rgb(0 ,150,200)"
            }

            ctx.fillRect(125 + i * 110, 25 + j * 160, 100, 150)
            console.log(125 + i * 110, 25 + j * 160, 100, 150)
            ctx.strokeRect(125 + i * 110, 25 + j * 160, 100, 150)
        }

        function siegpunkteZeichnen(i, j, karte) {
            if (karte.Siegpunkte == ) {

            }
        }
        console.log(state.G.markt)
        //state.G["reihe1"]
        for (let j in state.G.markt.reihen) {
            const reihe = state.G.markt.reihen[j]
            console.log(reihe, j)
            for (let i in state.G.markt.reihen[j]) {
                const karte = reihe[i]
                console.log(karte)
                KarteMalen(i, j, karte)
            }
        }
    }
}

const appElement = document.getElementById("app");
const app = new GameClient(appElement);
