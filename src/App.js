import { Client } from "boardgame.io/client";
import { Local, SocketIO } from "boardgame.io/multiplayer";
import { resetOnClicks, onClick, drawPicture } from "./canvas";
import { Game, siegpunktAnzahl } from "./Game";
import { Debug } from "boardgame.io/debug";
import { setupLobby } from "./lobby";

const isMultiplayer = import.meta.env.VITE_REMOTE === "true";
const multiplayerServer =
    import.meta.env.VITE_MUTLIPLAYER_SERVER ?? "localhost:8000";

const multiplayer = isMultiplayer
    ? SocketIO({ server: multiplayerServer })
    : Local();

class GameClient {
    constructor(rootElement, gameParams) {
        this.rootElement = rootElement;

        this.client = Client({
            game: Game,
            numPlayers: 4,
            multiplayer: isMultiplayer ? multiplayer : undefined,
            debug: {
                collapseOnLoad: false,
                hideToggleButton: false,
                impl: Debug,
            },
            matchID: gameParams?.matchId,
            playerID: gameParams?.playerId,
            credentials: gameParams?.playerCredentials,
        });

        this.client.subscribe((state) => {
            if (state === null) return;
            this.update(state);
        });
        this.client.start();
    }

    update(state) {
        resetOnClicks();
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        const self = this;

        ctx.fillStyle = "rgb(255,255,255)";
        ctx.fillRect(0, 0, 100000, 1000000);
        // Reihe Seltenheit 1
        ctx.fillStyle = "rgb(70,70,70)";
        ctx.fillRect(5, 25, 100, 150);
        drawPicture(ctx, "seltenheit1.jpg",5, 25, 100, 150)
        ctx.strokeRect(5, 25, 100, 150);

        ctx.fillStyle = "rgb(110,110,110)";
        ctx.fillRect(5, 185, 100, 150);
        drawPicture(ctx, "seltenheit3.jpg",5, 185, 100, 150)
        ctx.strokeRect(5, 185, 100, 150);

        ctx.fillStyle = "rgb(150,150,150)";
        ctx.fillRect(5, 345, 100, 150);
        drawPicture(ctx, "seltenheit2.jpg",5, 345, 100, 150 )
        ctx.strokeRect(5, 345, 100, 150);

        function chipsVisualisieren(marktChips) {
            if (marktChips.blau > 0) {
                ctx.beginPath();
                ctx.arc(600, 176.5, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(0,111,185)";
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(marktChips.blau, 635, 186.5); // anzahl chips
            }

            if (marktChips.gelb > 0) {
                ctx.beginPath();
                ctx.arc(600, 122.5, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(240, 230, 140)";
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(marktChips.gelb, 635, 132.5);
            }

            if (marktChips.weiss > 0) {
                ctx.beginPath();
                ctx.arc(600, 230, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(161,61,99)"; //rosa
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(marktChips.weiss, 635, 240.5);
            }
            if (marktChips.gruen > 0) {
                ctx.beginPath();
                ctx.arc(600, 284, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(22,152,115)"; //türkis
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(marktChips.gruen, 635, 294.5);
            }
            if (marktChips.rot > 0) {
                ctx.beginPath();
                ctx.arc(600, 338, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(25,83,95)"; // blau
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(marktChips.rot, 635, 348.5);
            }
            if (marktChips.schwarz > 0) {
                ctx.beginPath();
                ctx.arc(600, 392, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(128,93,157)"; //lila schwarz
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(marktChips.schwarz, 635, 402.5);
            }
            let k = 0;

            onClick(575, 370, 40, 40, () => {
                self.client.moves.chipsZiehen("schwarz");
                k++;
            });

            onClick(575, 315, 40, 30, () => {
                self.client.moves.chipsZiehen("rot");
                k++;
            });
            onClick(575, 270, 40, 20, () => {
                self.client.moves.chipsZiehen("gruen");
                k++;
            });
            onClick(575, 220, 40, 20, () => {
                self.client.moves.chipsZiehen("weiss");
                k++;
            });
            onClick(575, 165, 40, 20, () => {
                self.client.moves.chipsZiehen("blau");
                k++;
            });
            40;
            onClick(575, 120, 40, 20, () => {
                575;
                self.client.moves.chipsZiehen("gelb");
                k++;
            });
        }

        function KarteMalen(i, j, karte) {
            if (karte.Farbe == "schwarz") {
                //lila
                ctx.fillStyle = "rgb(128,93,157)";
            } else if (karte.Farbe == "rot") {
                ctx.fillStyle = "rgb(25,83,95)"; // blau
            } else if (karte.Farbe == "gruen") {
                //türkis
                ctx.fillStyle = "rgb(22,152,115)";
            } else if (karte.Farbe == "weiss") {
                //rosa
                ctx.fillStyle = "rgb(161,61,99)";
            } else if (karte.Farbe == "blau") {
                //hässliches blau
                ctx.fillStyle = "rgb(0,111,185)";
            }

            ctx.fillRect(125 + i * 110, 25 + j * 160, 100, 150);
            //console.log(125 + i * 110, 25 + j * 160, 100, 150);
            ctx.strokeRect(125 + i * 110, 25 + j * 160, 100, 150);

            function resKaufFenster(i, j) {
                ctx.fillStyle = "rgb(255,255,255)";
                ctx.strokeStyle = "rgb(0,0,0)";
                ctx.fillRect(125 + i * 110 + 100, 25 + j * 160, 100, 50);
                ctx.strokeRect(125 + i * 110 + 100, 25 + j * 160, 100, 25);
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.font = "20px American Typewriter";
                ctx.fillText(
                    "Reservieren",
                    125 + i * 110 + 102,
                    25 + j * 160 + 20
                );
                ctx.strokeRect(125 + i * 110 + 100, 25 + j * 160 + 25, 100, 25);
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.font = "20px American Typewriter";
                ctx.fillText("Kaufen", 125 + i * 110 + 102, 25 + j * 160 + 44);
            }
            let a = 0;
            onClick(125 + i * 110, 25 + j * 160, 100, 150, () => {
                if (a == 0) {
                    resKaufFenster(i, j);
                    onClick(
                        125 + i * 110 + 100,
                        25 + j * 160 + 25,
                        100,
                        25,
                        () => {
                            self.client.moves.karteKaufen(j, i);
                        }
                    );
                    onClick(125 + i * 110 + 100, 25 + j * 160, 100, 25, () => {
                        self.client.moves.karteReservieren(j, i);
                    });
                    a = 1;
                } else {
                    self.update(state);
                }
            });

            siegpunkteZeichnen(i, j, karte);
            preisVisualisierung(i, j, karte);
        }
        function siegpunkteZeichnen(i, j, karte) {
            if (karte.Siegpunkte != 0) {
                ctx.font = "30px American Typewriter";
                ctx.fillStyle = "rgb(150, 150, 150)";
                ctx.fillText(karte.Siegpunkte, 130 + i * 110, 50 + j * 160);

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
                ctx.fillStyle = "rgb(0,111,185)";
                ctx.fill();

                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(karte.Preis.blau, 134 + i * 110, 167.5 + j * 160);
                (
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
                ctx.fillStyle = "rgb(161,61,99)";
                ctx.fill();

                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(karte.Preis.weiss, 134 + i * 110, 145 + j * 160);

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
                ctx.fillStyle = "rgb(22,152,115)";
                ctx.fill();

                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(karte.Preis.gruen, 134 + i * 110, 122.5 + j * 160);

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
                ctx.fillStyle = "rgb(25,83,95)";
                ctx.fill();

                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(karte.Preis.rot, 134 + i * 110, 100 + j * 160);

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
                ctx.fillStyle = "rgb(128,93,157)";
                ctx.fill();

                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(karte.Preis.schwarz, 134 + i * 110, 78 + j * 160);
                //(karte.Preis.schwarz, 134 + i * 110, 122,5 + j * 160)
            }
        }

        //console.log(state.G.markt);
        //state.G["reihe1"]
        for (let j in state.G.markt.reihen) {
            const reihe = state.G.markt.reihen[j];
            //console.log(reihe, j);
            for (let i in state.G.markt.reihen[j]) {
                const karte = reihe[i];
                console.log(karte, reihe);

                //console.log(chipsReservoir)
                KarteMalen(i, j, karte);
            }
        }
        chipsVisualisieren(state.G.markt.marktChips);
        //nobles
        /* ctx.fillStyle = "rgb(200, 200, 200)";
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
*/
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
        //chipsSpieler

        //erste Hand

        /*         ctx.beginPath()
        ctx.arc(1490, 126.5, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "blue"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 136.5) */

        /*         ctx.beginPath()
        ctx.arc(1490, 62.5, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "yellow"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 72.5) */

        /*         ctx.beginPath()
        ctx.arc(1490, 191, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "rgb(248, 98, 236)"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 200.5) */

        /*         ctx.beginPath()
        ctx.arc(1490, 250.5, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "green"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 255.5)
 */
        /*         ctx.beginPath()
        ctx.arc(1490, 322.5, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 329.5) */

        /*         ctx.beginPath()
        ctx.arc(1490, 390.5, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "black"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 410.5) */

        //zweite Hand

        /*         ctx.beginPath()
        ctx.arc(1490, 556.5, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "blue"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 566.5) */

        /*         ctx.beginPath()
        ctx.arc(1490, 502.5, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "yellow"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 510)
 */
        /*         ctx.beginPath()
        ctx.arc(1490, 621, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "rgb(248, 98, 236)"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 623.5)

        ctx.beginPath()
        ctx.arc(1490, 680.5, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "green"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 685.5)

        ctx.beginPath()
        ctx.arc(1490, 750.5, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 759.5)

        ctx.beginPath()
        ctx.arc(1490, 820.5, 25, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
        ctx.fillStyle = "black"
        ctx.fill()
        ctx.font = "30px American Typewriter"

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillText(4, 1525, 840.5)
 */

        console.log(state.G);
        function SpielerChips(idxSpieler, state) {
            if (state.G.einzelneSpielerHaende[idxSpieler].chips.gelb > 0) {
                ctx.beginPath();
                ctx.arc(
                    1490,
                    62.5 + idxSpieler * 445,
                    25,
                    0,
                    Math.PI * 2,
                    true
                ); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(240, 230, 140)"; //gelb
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(
                    state.G.einzelneSpielerHaende[idxSpieler].chips.gelb,
                    1525,
                    72.5 + idxSpieler * 440
                );
            }

            if (state.G.einzelneSpielerHaende[idxSpieler].chips.blau > 0) {
                ctx.beginPath();
                ctx.arc(
                    1490,
                    126.5 + idxSpieler * 440,
                    25,
                    0,
                    Math.PI * 2,
                    true
                ); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(0,111,185)"; //hässliches blau
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(
                    state.G.einzelneSpielerHaende[idxSpieler].chips.blau,
                    1525,
                    126.5 + idxSpieler * 440
                );
            }

            if (state.G.einzelneSpielerHaende[idxSpieler].chips.weiss > 0) {
                ctx.beginPath();
                ctx.arc(1490, 191 + idxSpieler * 440, 25, 0, Math.PI * 2, true); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(161,61,99)"; //rosa
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(
                    state.G.einzelneSpielerHaende[idxSpieler].chips.weiss,
                    1525,
                    200.5 + idxSpieler * 440
                );
            }
            if (state.G.einzelneSpielerHaende[idxSpieler].chips.gruen > 0) {
                ctx.beginPath();
                ctx.arc(
                    1490,
                    250.5 + idxSpieler * 440,
                    25,
                    0,
                    Math.PI * 2,
                    true
                ); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(22,152,115)"; //türkis
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(
                    state.G.einzelneSpielerHaende[idxSpieler].chips.gruen,
                    1525,
                    255.5 + idxSpieler * 440
                );
            }
            if (state.G.einzelneSpielerHaende[idxSpieler].chips.rot > 0) {
                ctx.beginPath();
                ctx.arc(
                    1490,
                    322.5 + idxSpieler * 440,
                    25,
                    0,
                    Math.PI * 2,
                    true
                ); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(25,83,95)"; //dunkelblau
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(
                    state.G.einzelneSpielerHaende[idxSpieler].chips.rot,
                    1525,
                    329.5 + idxSpieler * 440
                );
            }
            if (state.G.einzelneSpielerHaende[idxSpieler].chips.schwarz > 0) {
                ctx.beginPath();
                ctx.arc(
                    1490,
                    390.5 + idxSpieler * 440,
                    25,
                    0,
                    Math.PI * 2,
                    true
                ); // Outer circle
                ctx.stroke();
                ctx.fillStyle = "rgb(128,93,157)"; //lila
                ctx.fill();
                ctx.font = "30px American Typewriter";

                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillText(
                    state.G.einzelneSpielerHaende[idxSpieler].chips.schwarz,
                    1525,
                    410.5 + idxSpieler * 440
                );
            }
        }


        // Test SpielerHandKarte



        function spielerReservierteKarten(idxSpieler, state) {
            let j = 7.85


            for (const reskarte of state.G.einzelneSpielerHaende[idxSpieler].reservierteKarten) {
                console.log(j, reskarte)
                KarteMalen(j, idxSpieler * 2.811, reskarte)
                j++


          }
        }

        function spielerhandKartenAnzahl(idxSpieler, state) {
            let blau = 0;
            let weiss = 0;
            let gruen = 0;
            let rot = 0;
            let schwarz = 0;
            console.log(state.ctx.currentPlayer);
            for (const kartenCounter of state.G.einzelneSpielerHaende[
                idxSpieler
            ].karten) {
                //console.log(state.G)
                if (kartenCounter.Farbe == "blau") {
                    blau++;
                }
                if (kartenCounter.Farbe == "weiss") {
                    weiss++;
                }
                if (kartenCounter.Farbe == "gruen") {
                    gruen++;
                }
                if (kartenCounter.Farbe == "rot") {
                    rot++;
                }

                if (kartenCounter.Farbe == "schwarz") {
                    schwarz++;
                }
            }
            /*         console.log(blau, weiss, rot)
        ctx.font = "30px American Typewriter";
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillText(
            "blau:", 810, 60)
        ctx.fillText(blau, 875, 60)
 */
            /*         ctx.fillText(
            "weiss:", 810, 90)
        ctx.fillText(weiss, 885, 90)

        ctx.fillText(
            "gruen:", 810, 120)
        ctx.fillText(weiss, 885, 120)

        ctx.fillText(
            "rot:", 810, 150)
        ctx.fillText(weiss, 885, 150)

        ctx.fillText(
            "schwarz:", 810, 180)
        ctx.fillText(weiss, 925, 180)

        ctx.fillText(
            "blau:", 810, 500)
        ctx.fillText(blau, 875, 60) */

            console.log(blau, weiss, rot);
            ctx.font = "30px American Typewriter";
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fillText("blau:", 810, 60 + idxSpieler * 447.5);
            ctx.fillText(blau, 875, 60 + idxSpieler * 447.5);

            ctx.fillText("rosa:", 810, 90 + idxSpieler * 447.5);
            ctx.fillText(weiss, 885, 90 + idxSpieler * 447.5);

            ctx.fillText("türkis:", 810, 120 + idxSpieler * 447.5);
            ctx.fillText(gruen, 885, 120 + idxSpieler * 447.5);

            ctx.fillText("dunkelblau:", 810, 150 + idxSpieler * 447.5);
            ctx.fillText(rot, 950, 150 + idxSpieler * 447.5);

            ctx.fillText("lila:", 810, 180 + idxSpieler * 447.5);
            ctx.fillText(schwarz, 925, 180 + idxSpieler * 447.5);
        }

        for (const spielerPlayOrder of state.ctx.playOrder) {
            ctx.fillStyle = "rgb(250, 250, 250)";
            ctx.fillRect(810, 380 + 450 * spielerPlayOrder, 40, 30);
            ctx.strokeText(
                siegpunktAnzahl(state, spielerPlayOrder),
                810,
                405 + 450 * spielerPlayOrder
            );
        }
        for (const idxSpieler of state.ctx.playOrder) {
            console.log(idxSpieler);
            SpielerChips(idxSpieler, state);
            spielerhandKartenAnzahl(idxSpieler, state);
            console.log(idxSpieler)
            spielerReservierteKarten(idxSpieler, state)
        }

        if (state.ctx.gameover != undefined) {
            ctx.fillStyle = "pink";
            ctx.fillRect(50, 100, 1000, 400);
            ctx.font = "75px American Typewriter";

            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fillText("Player", 240, 325);
            ctx.fillText(state.ctx.currentPlayer, 455, 325);
            ctx.fillText("wins", 505, 325);
        }
    }
}

setupLobby(
    isMultiplayer,
    (appElement, game) => new GameClient(appElement, game)
);

/*             for (const Karteidx of state.G.einzelneSpielerHaende[idxSpieler].karten) {  //Ausbaustufe 1
console.log(Karteidx)
if (Karteidx.Farbe == "blau") {
    let offset = 0
    KarteMalen(6.25, 0, Karteidx)
    offset = offset + 0.1
    ctx.fillStyle = "blue"
}

if (Karteidx.Farbe == "weiss") {
    console.log (Karteidx.Farbe)
    let offset = 0
    KarteMalen(6.75, 0, Karteidx)
    offset = offset + 0.1
    ctx.fillStyle = "rgb(248, 98, 236)"
}

}   */
