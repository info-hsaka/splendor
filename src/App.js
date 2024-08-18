import { Client } from "boardgame.io/client";
import { Local, SocketIO } from "boardgame.io/multiplayer";
import { resetOnClicks, onClick } from "./canvas";
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
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        // Reihe Seltenheit 1
        ctx.fillStyle = "rgb(75, 139, 59)";
        ctx.fillRect(5, 25, 100, 150);
        ctx.strokeRect(5, 25, 100, 150);

        ctx.fillStyle = "rgb(184, 156, 80)";
        ctx.fillRect(5, 185, 100, 150);
        ctx.strokeRect(5, 185, 100, 150);

        ctx.fillStyle = "#003781";
        ctx.fillRect(5, 345, 100, 150);
        ctx.strokeRect(5, 345, 100, 150);

        function chipsVisualisieren(chipsReservoir) {

            if (chipsReservoir.blau > 0) {
                ctx.beginPath();
                ctx.arc(600, 176.5, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.font = "30px American Typewriter"; 

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.blau, 635, 186.5);

            }

            if (chipsReservoir.gelb > 0) {
                ctx.beginPath();
                ctx.arc(600, 122.5, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "yellow";
                ctx.fill();
                ctx.font = "30px American Typewriter"; 

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.gelb, 635, 132.5);

            }

            if (chipsReservoir.weiss > 0) {
                ctx.beginPath();
                ctx.arc(600, 230, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "grey";
                ctx.fill();
                ctx.font = "30px American Typewriter"; 

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.weiss, 635, 240.5);

            }
            if (chipsReservoir.gruen > 0) {
                ctx.beginPath();
                ctx.arc(600, 284, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.font = "30px American Typewriter"; 

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.gruen, 635, 294.5);

            }
            if (chipsReservoir.rot > 0) {
                ctx.beginPath();
                ctx.arc(600, 338, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.font = "30px American Typewriter"; 

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.rot, 635, 348.5);

            }
            if (chipsReservoir.schwarz > 0) {
                ctx.beginPath();
                ctx.arc(600, 392, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "black";
                ctx.fill();
                ctx.font = "30px American Typewriter";
        
                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.schwarz, 635, 402.5);
            }
        }



        function KarteMalen(i, j, karte) {
            if (karte.farbe == "schwarz") {
                ctx.fillStyle = "rgb(46,41,65)";
            } else if (karte.farbe == "rot") {
                ctx.fillStyle = "rgb(200,50,00";
            } else if (karte.farbe == "gruen") {
                ctx.fillStyle = "rgb(80,200,120)";
            } else if (karte.farbe == "weiss") {
                ctx.fillStyle = "rgb(248, 244, 236)";
            } else if (karte.farbe == "blau") {
                ctx.fillStyle = "rgb(0 ,150,200)";
            }
            onClick(125 + i * 110, 25 + j * 160, 100, 150, () => {
                auswahlResKaufFenster;
            });

            ctx.fillRect(125 + i * 110, 25 + j * 160, 100, 150);
            //console.log(125 + i * 110, 25 + j * 160, 100, 150);
            ctx.strokeRect(125 + i * 110, 25 + j * 160, 100, 150);

            siegpunkteZeichnen(i, j, karte);
            preisVisualisierung(i, j, karte);
        }

        function siegpunkteZeichnen(i, j, karte) {
            if (karte.Siegpunkte != 0) {
                ctx.font = "30px American Typewriter";
                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(karte.Siegpunkte, 130 + i * 110, 50 + j * 160);
                ctx.strokeText(karte.Siegpunkte, 130 + i * 110, 50 + j * 160);
            }
        }

        function preisVisualisierung(i, j, karte) {
            ctx.font = "15px American Typewriter";
            ctx.fillStyle = "rgb(255, 255, 255)";
            if (karte.Preis.blau > 0) {
                ctx.beginPath();
                ctx.arc(
                    137.5 + i * 110,
                    162.5 + j * 160,
                    10,
                    0,
                    Math.PI * 2,
                    true
                ); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(0,0, 255)";
                ctx.fill();

                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(karte.Preis.blau, 134 + i * 110, 167.5 + j * 160);
                ctx.strokeText(
                    karte.Preis.blau,
                    134 + i * 110,
                    167.5 + j * 160
                );
            }
            if (karte.Preis.weiss > 0) {
                ctx.beginPath();
                ctx.arc(
                    137.5 + i * 110,
                    140 + j * 160,
                    10,
                    0,
                    Math.PI * 2,
                    true
                ); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(255,255, 255)";
                ctx.fill();

                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(karte.Preis.weiss, 134 + i * 110, 145 + j * 160);
                ctx.strokeText(karte.Preis.weiss, 134 + i * 110, 145 + j * 160);
            }
            if (karte.Preis.gruen > 0) {
                ctx.beginPath();
                ctx.arc(
                    137.5 + i * 110,
                    117.5 + j * 160,
                    10,
                    0,
                    Math.PI * 2,
                    true
                ); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(0, 255, 0)";
                ctx.fill();

                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(karte.Preis.gruen, 134 + i * 110, 122.5 + j * 160);
                ctx.strokeText(
                    karte.Preis.gruen,
                    134 + i * 110,
                    122.5 + j * 160
                );
            }
            if (karte.Preis.rot > 0) {
                ctx.beginPath();
                ctx.arc(
                    137.5 + i * 110,
                    94.5 + j * 160,
                    10,
                    0,
                    Math.PI * 2,
                    true
                ); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(255, 0, 0)";
                ctx.fill();

                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(karte.Preis.rot, 134 + i * 110, 100 + j * 160);
                ctx.strokeText(karte.Preis.rot, 134 + i * 110, 100 + j * 160);
            }
            if (karte.Preis.schwarz > 0) {
                ctx.beginPath();
                ctx.arc(
                    137.5 + i * 110,
                    72 + j * 160,
                    10,
                    0,
                    Math.PI * 2,
                    true
                ); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fill();

                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(karte.Preis.schwarz, 134 + i * 110, 78 + j * 160);
                //ctx.strokeText(karte.Preis.schwarz, 134 + i * 110, 122,5 + j * 160)
            }
        }

        function chipsSpielerhand() { // Koordinaten ändern
            
            if (chipsReservoir.blau > 0) {
                ctx.beginPath();
                ctx.arc(600, 176.5, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.font = "30px American Typewriter"; 

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.blau, 635, 186.5);

            }

            if (chipsReservoir.gelb > 0) {
                ctx.beginPath();
                ctx.arc(600, 122.5, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "yellow";
                ctx.fill();
                ctx.font = "30px American Typewriter"; 

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.gelb, 635, 132.5);

            }

            if (chipsReservoir.weiss > 0) {
                ctx.beginPath();
                ctx.arc(600, 230, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "grey";
                ctx.fill();
                ctx.font = "30px American Typewriter"; 

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.weiss, 635, 240.5);

            }
            if (chipsReservoir.gruen > 0) {
                ctx.beginPath();
                ctx.arc(600, 284, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.font = "30px American Typewriter"; 

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.gruen, 635, 294.5);

            }
            if (chipsReservoir.rot > 0) {
                ctx.beginPath();
                ctx.arc(600, 338, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.font = "30px American Typewriter"; 

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.rot, 635, 348.5);

            }
            if (chipsReservoir.schwarz > 0) {
                ctx.beginPath();
                ctx.arc(600, 392, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "black";
                ctx.fill();
                ctx.font = "30px American Typewriter";
        
                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(chipsReservoir.schwarz, 635, 402.5);
            }
        }

        //console.log(state.G.markt);
        //state.G["reihe1"]
        for (let j in state.G.markt.reihen) {
            const reihe = state.G.markt.reihen[j];
            //console.log(reihe, j);
            for (let i in state.G.markt.reihen[j]) {
                const chipsReservoir = state.G.chipsReservoir
                const karte = reihe[i];
                //console.log(karte);
                //console.log(chipsReservoir)
                KarteMalen(i, j, karte);
                chipsVisualisieren(chipsReservoir)

            }
        }
        //nobles
        ctx.fillStyle = "rgb(200, 200, 200)";
        ctx.fillRect(666, 105, 90, 90);
        ctx.strokeRect(666, 105, 90, 90);
        ctx.font = "30px American Typewriter";
        ctx.fillStyle = "rgb(100, 100, 100) ";
        ctx.fillText(3, 670, 130);
        ctx.fillStyle = "rgb(50, 50, 50)";
        ctx.fillRect(668, 172.5, 15, 20);


        ctx.fillStyle = "rgb(200, 200, 200)";
        ctx.fillRect(666, 213, 90, 90);
        ctx.strokeRect(666, 213, 90, 90);
        ctx.font = "30px American Typewriter";
        ctx.fillStyle = "rgb(100, 100, 100)";
        ctx.fillText(3, 670, 238);

        ctx.fillStyle = "rgb(200, 200, 200)";
        ctx.fillRect(666, 321, 90, 90);
        ctx.strokeRect(666, 321, 90, 90);
        ctx.font = "30px American Typewriter";
        ctx.fillStyle = "rgb(100, 100, 100)";
        ctx.fillText(3, 670, 346);
        
        // Spielerhaende

        ctx.fillStyle = "rgb(225, 225, 225)";
        ctx.fillRect(800, 25, 750, 400);
        ctx.strokeRect(800, 25, 750, 400);

        ctx.fillStyle = "rgb(225, 225, 225)";
        ctx.fillRect(800, 475, 750, 400);
        ctx.strokeRect(800, 475, 750, 400);

        ctx.fillStyle = "rgb(225, 225, 225)";
        ctx.fillRect(800, 925, 750, 400);
        ctx.strokeRect(800, 925, 750, 400);

        ctx.fillStyle = "rgb(225, 225, 225)";
        ctx.fillRect(800, 1375, 750, 400);
        ctx.strokeRect(800, 1375, 750, 400);

    }
}

const appElement = document.getElementById("app");
const app = new GameClient(appElement);
800