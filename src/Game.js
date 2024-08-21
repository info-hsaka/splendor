/** @import { Game } from "boardgame.io" */

import { TurnOrder } from "boardgame.io/core";

// Nobles
const nobles = [
    {
        Siegpunkte: 3,
        Preis: { rot: 0, gruen: 4, blau: 4, weiss: 0, schwarz: 0 },
    },
];
// Deck: Seltenheit 1

const Seltenheit1Deck = [
    {
        Farbe: "blau",
        Siegpunkte: 0,
        Preis: { rot: 0, gruen: 0, blau: 0, weiss: 0, schwarz: 3 },
    },
    {
        Farbe: "blau",
        Siegpunkte: 0,
        Preis: { rot: 2, gruen: 1, blau: 0, weiss: 1, schwarz: 1 },
    },
    {
        Farbe: "schwarz",
        Siegpunkte: 0,
        Preis: { rot: 1, gruen: 0, blau: 2, weiss: 2, schwarz: 0 },
    },
    {
        Farbe: "gruen",
        Siegpunkte: 0,
        Preis: { rot: 0, gruen: 0, blau: 1, weiss: 2, schwarz: 0 },
    },
    {
        Farbe: "gruen",
        Siegpunkte: 0,
        Preis: { rot: 3, gruen: 0, blau: 0, weiss: 0, schwarz: 0 },
    },
    {
        Farbe: "blau",
        Siegpunkte: 0,
        Preis: { rot: 1, gruen: 1, blau: 0, weiss: 1, schwarz: 1 },
    },
    {
        Farbe: "rot",
        Siegpunkte: 0,
        Preis: { rot: 0, gruen: 1, blau: 2, weiss: 0, schwarz: 0 },
    },
    {
        Farbe: "schwarz",
        Siegpunkte: 0,
        Preis: { rot: 3, gruen: 1, blau: 0, weiss: 0, schwarz: 1 },
    },
    {
        Farbe: "weiss",
        Siegpunkte: 0,
        Preis: { rot: 0, gruen: 0, blau: 2, weiss: 0, schwarz: 2 },
    },
    {
        Farbe: "weiss",
        Siegpunkte: 0,
        Preis: { rot: 2, gruen: 0, blau: 0, weiss: 0, schwarz: 1 },
    },
    {
        Farbe: "rot",
        Siegpunkte: 0,
        Preis: { rot: 0, gruen: 1, blau: 0, weiss: 2, schwarz: 2 },
    },
    {
        Farbe: "blau",
        Siegpunkte: 0,
        Preis: { rot: 2, gruen: 2, blau: 0, weiss: 1, schwarz: 0 },
    },
    {
        Farbe: "schwarz",
        Siegpunkte: 0,
        Preis: { rot: 1, gruen: 1, blau: 2, weiss: 1, schwarz: 0 },
    },
];

//Deck: Seltenheit2
const Seltenheit2Deck = [
    {
        Farbe: "weiss",
        Siegpunkte: 2,
        Preis: { rot: 4, gruen: 1, blau: 0, weiss: 0, schwarz: 2 },
    },
    {
        Farbe: "schwarz",
        Siegpunkte: 2,
        Preis: { rot: 3, gruen: 5, blau: 0, weiss: 0, schwarz: 0 },
    },
    {
        Farbe: "weiss",
        Siegpunkte: 1,
        Preis: { rot: 3, gruen: 0, blau: 3, weiss: 2, schwarz: 0 },
    },
    {
        Farbe: "gruen",
        Siegpunkte: 1,
        Preis: { rot: 0, gruen: 0, blau: 3, weiss: 2, schwarz: 2 },
    },
    {
        Farbe: "weiss",
        Siegpunkte: 2,
        Preis: { rot: 4, gruen: 1, blau: 0, weiss: 0, schwarz: 2 },
    },
    {
        Farbe: "schwarz",
        Siegpunkte: 2,
        Preis: { rot: 3, gruen: 5, blau: 0, weiss: 0, schwarz: 0 },
    },
    {
        Farbe: "weiss",
        Siegpunkte: 1,
        Preis: { rot: 3, gruen: 0, blau: 3, weiss: 2, schwarz: 0 },
    },
    {
        Farbe: "gruen",
        Siegpunkte: 1,
        Preis: { rot: 0, gruen: 0, blau: 3, weiss: 2, schwarz: 2 },
    },
];
const Seltenheit3Deck = [
    {
        Farbe: "blau",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    }, // keine echte Karte nur beispiel
    {
        Farbe: "blau",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    },
    {
        Farbe: "schwarz",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    },
    {
        Farbe: "gruen",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    },
    {
        Farbe: "rot",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    }, // keine echte Karte nur beispiel
    {
        Farbe: "blau",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    }, // keine echte Karte nur beispiel
    {
        Farbe: "blau",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    },
    {
        Farbe: "schwarz",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    },
    {
        Farbe: "gruen",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    },
    {
        Farbe: "rot",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    },
];

const chipsReservoir = {
    rot: 7,
    gruen: 7,
    blau: 7,
    weiss: 7,
    schwarz: 7,
    gelb: 5,
};

function SpielerSetup() {
    const SpielerHandStart = {
        chips: {
            gruen: 100,
            rot: 100,
            blau: 100,
            weiss: 100,
            schwarz: 100,
            gelb: 10,
        }, // wieder auf null setzen

        karten: [
            {
                Farbe: "weiss",
                Siegpunkte: 2,
                Preis: { rot: 4, gruen: 1, blau: 0, weiss: 0, schwarz: 2 },
            },
            {
                Farbe: "blau",
                Siegpunkte: 2,
                Preis: { rot: 4, gruen: 1, blau: 0, weiss: 0, schwarz: 2 },
            },
            {
                Farbe: "rot",
                Siegpunkte: 2,
                Preis: { rot: 4, gruen: 1, blau: 0, weiss: 0, schwarz: 2 },
            },
            {
                Farbe: "rot",
                Siegpunkte: 2,
                Preis: { rot: 4, gruen: 1, blau: 0, weiss: 0, schwarz: 2 },
            },
            {
                Farbe: "rot",
                Siegpunkte: 2,
                Preis: { rot: 4, gruen: 1, blau: 0, weiss: 0, schwarz: 2 },
            },
        ],

        Nobles: [],

        reservierteKarten: [],
    };
    return SpielerHandStart;
}

let playerNames = [];

/** @type {Game} */
export const Game = {
    setup: ({ random, ctx }) => {
        let einzelneSpielerHaende = {};

        for (const spielerPlayOrder of ctx.playOrder) {
            einzelneSpielerHaende[spielerPlayOrder] = SpielerSetup();
        }

        const stapel1 = random.Shuffle(Seltenheit1Deck);
        const stapel2 = random.Shuffle(Seltenheit2Deck);
        const stapel3 = random.Shuffle(Seltenheit3Deck);

        let i = 0;
        let y = 0;
        let reihe1 = [];
        let reihe2 = [];
        let reihe3 = [];
        let reiheNobles = [];
        while (i < 4) {
            reihe1.push(stapel1.pop());
            reihe2.push(stapel2.pop());
            reihe3.push(stapel3.pop());
            i++;
        }
        const markt = {
            marktChips: {
                rot: 7,
                gruen: 7,
                blau: 2,
                weiss: 7,
                schwarz: 7,
                gelb: 5,
            },
            reihen: [reihe1, reihe2, reihe3],
            stapel: [stapel1, stapel2, stapel3],
        };
        while (y < 3) {
            reiheNobles.push(nobles.pop());
            y++;
        }
        return {
            reiheNobles: reiheNobles,
            markt: markt,
            einzelneSpielerHaende: einzelneSpielerHaende,
            chipsReservoir: chipsReservoir,
        };
    },

    moves: {
        //Funktion initiiert, dass eine Karte gekauft wird.

        karteKaufen(move, reiheID, positionID) {
            console.log(
                JSON.stringify(move.G.markt.stapel[reiheID]),
                JSON.stringify(move.G.markt.reihen[reiheID])
            );
            let i = 0;
            //gekaufte Karten die in der Spielerhand sind
            let AnzahlHandKarten = {
                rot: 0,
                gruen: 0,
                blau: 0,
                weiss: 0,
                schwarz: 0,
            };
            const Spielerhand = move.G.einzelneSpielerHaende[move.playerID];
            console.log(Spielerhand, move.playerID);

            while (i < Spielerhand.karten.length) {
                if (Spielerhand.karten[i].Farbe == "blau") {
                    AnzahlHandKarten.blau = AnzahlHandKarten.blau + 1;
                } else if (Spielerhand.karten[i].Farbe == "gruen") {
                    AnzahlHandKarten.gruen = AnzahlHandKarten.gruen + 1;
                } else if (Spielerhand.karten[i].Farbe == "rot") {
                    AnzahlHandKarten.rot = AnzahlHandKarten.rot + 1;
                } else if (Spielerhand.karten[i].Farbe == "weiss") {
                    AnzahlHandKarten.weiss = AnzahlHandKarten.weiss + 1;
                } else if (Spielerhand.karten[i].Farbe == "schwarz") {
                    AnzahlHandKarten.schwarz = AnzahlHandKarten.schwarz + 1;
                }
                i = i + 1;
            }

            if (
                move.G.markt.reihen[reiheID][positionID].Preis.gruen <=
                    AnzahlHandKarten.gruen &&
                move.G.markt.reihen[reiheID][positionID].Preis.rot <=
                    AnzahlHandKarten.rot &&
                move.G.markt.reihen[reiheID][positionID].Preis.blau <=
                    AnzahlHandKarten.blau &&
                move.G.markt.reihen[reiheID][positionID].Preis.schwarz <=
                    AnzahlHandKarten.schwarz &&
                move.G.markt.reihen[reiheID][positionID].Preis.weiss <=
                    AnzahlHandKarten.weiss
            ) {
                Spielerhand.karten.push(
                    move.G.markt.reihen[reiheID][positionID]
                );

                move.G.markt.reihen[reiheID].splice(positionID, 1);
                if (move.G.markt.stapel[reiheID].length > 0) {
                    move.G.markt.reihen[reiheID].splice(
                        positionID,
                        0,
                        move.G.markt.stapel[reiheID].pop()
                    );
                }
            } else if (
                move.G.markt.reihen[reiheID][positionID].Preis.gruen <=
                    AnzahlHandKarten.gruen + Spielerhand.chips.gruen &&
                move.G.markt.reihen[reiheID][positionID].Preis.rot <=
                    AnzahlHandKarten.rot + Spielerhand.chips.rot &&
                move.G.markt.reihen[reiheID][positionID].Preis.weiss <=
                    AnzahlHandKarten.weiss + Spielerhand.chips.weiss &&
                move.G.markt.reihen[reiheID][positionID].Preis.schwarz <=
                    AnzahlHandKarten.schwarz + Spielerhand.chips.schwarz &&
                move.G.markt.reihen[reiheID][positionID].Preis.blau <=
                    AnzahlHandKarten.blau + Spielerhand.chips.blau
            ) {
                if (
                    move.G.markt.reihen[reiheID][positionID].Preis.gruen -
                        AnzahlHandKarten.gruen >
                    0
                ) {
                    Spielerhand.chips.gruen =
                        Spielerhand.chips.gruen -
                        (move.G.markt.reihen[reiheID][positionID].Preis.gruen -
                            AnzahlHandKarten.gruen);
                    move.G.markt.marktChips.gruen =
                        move.G.markt.marktChips.gruen +
                        move.G.markt.reihen[reiheID][positionID].Preis.gruen -
                        AnzahlHandKarten.gruen;
                    //chips auf dem markt werden mehr
                }
                if (
                    move.G.markt.reihen[reiheID][positionID].Preis.rot -
                        AnzahlHandKarten.rot >
                    0
                ) {
                    Spielerhand.chips.rot =
                        Spielerhand.chips.rot -
                        (move.G.markt.reihen[reiheID][positionID].Preis.rot -
                            AnzahlHandKarten.rot);
                    move.G.markt.marktChips.rot =
                        move.G.markt.marktChips.rot +
                        move.G.markt.reihen[reiheID][positionID].Preis.rot -
                        AnzahlHandKarten.rot;
                }
                if (
                    move.G.markt.reihen[reiheID][positionID].Preis.weiss -
                        AnzahlHandKarten.weiss >
                    0
                ) {
                    Spielerhand.chips.weiss =
                        Spielerhand.chips.weiss -
                        (move.G.markt.reihen[reiheID][positionID].Preis.weiss -
                            AnzahlHandKarten.weiss);
                    move.G.markt.marktChips.weiss =
                        move.G.markt.marktChips.weiss +
                        move.G.markt.reihen[reiheID][positionID].Preis.weiss -
                        AnzahlHandKarten.weiss;
                }
                if (
                    move.G.markt.reihen[reiheID][positionID].Preis.schwarz -
                        AnzahlHandKarten.schwarz >
                    0
                ) {
                    Spielerhand.chips.schwarz =
                        Spielerhand.chips.schwarz -
                        (move.G.markt.reihen[reiheID][positionID].Preis
                            .schwarz -
                            AnzahlHandKarten.schwarz);
                    move.G.markt.marktChips.schwarz =
                        move.G.markt.marktChips.schwarz +
                        move.G.markt.reihen[reiheID][positionID].Preis.schwarz -
                        AnzahlHandKarten.schwarz;
                }
                if (
                    move.G.markt.reihen[reiheID][positionID].Preis.blau -
                        AnzahlHandKarten.blau >
                    0
                ) {
                    Spielerhand.chips.blau =
                        Spielerhand.chips.blau -
                        (move.G.markt.reihen[reiheID][positionID].Preis.blau -
                            AnzahlHandKarten.blau);
                    move.G.markt.marktChips.blau =
                        move.G.markt.marktChips.blau +
                        move.G.markt.reihen[reiheID][positionID].Preis.blau -
                        AnzahlHandKarten.blau;
                }
                Spielerhand.karten.push(
                    move.G.markt.reihen[reiheID][positionID]
                );
                move.G.markt.reihen[reiheID].splice(positionID, 1);
                if (move.G.markt.stapel[reiheID].length > 0) {
                    move.G.markt.reihen[reiheID].splice(
                        positionID,
                        0,
                        move.G.markt.stapel[reiheID].pop()
                    );
                }
            } else {
                console.log("Nicht genug Ressourcen!");
            }
        },
        karteReservieren(move, reiheID, positionID) {
            const Spielerhand = move.G.einzelneSpielerHaende[move.playerID];
            if (Spielerhand.reservierteKarten.length < 3) {
                if (reiheID == 0) {
                    move.G.markt.reihen[reiheID].splice(positionID, 1);
                    move.G.markt.reihen[reiheID].splice(
                        positionID,
                        0,
                        Seltenheit1Deck.pop()
                    );
                } else if (reiheID == 1) {
                    move.G.markt.reihen[reiheID].splice(positionID, 1);
                    move.G.markt.reihen[reiheID].splice(
                        positionID,
                        0,
                        Seltenheit2Deck.pop()
                    );
                } else if (reiheID == 2) {
                    move.G.markt.reihen[reiheID].splice(positionID, 1);
                    move.G.markt.reihen[reiheID].splice(
                        positionID,
                        0,
                        Seltenheit3Deck.pop()
                    );
                }
                Spielerhand.reservierteKarten.push(
                    move.G.reihen[reiheID][positionID]
                );
                if (move.G.markt.chipsReservoir.gelb > 0) {
                    Spielerhand.chips.gelb = Spielerhand.chips.gelb + 1;
                    move.G.markt.chipsReservoir.gelb =
                        move.G.markt.chipsReservoir.gelb - 1;
                } else console.log("Keine gelben Chips mehr verfügbar!");
            } else
                console.log(
                    "Zeitgleich dürfen maximal drei Karten reserviert werden!"
                ); /* 
                reservierteKartenKaufen (move, reservierteKarteID) {
                  
                } */
        },

        // zweichipsZiehen(move, colour) {
        //   let chipsGesamtSpieler =
        //     move.G.einzelneSpielerHaende.chips.gruen + //weitermachen nur ein Spieler!
        //     chips.rot +
        //     chips.blau +
        //     chips.weiss +
        //     chips.schwarz +
        //     chips.gelb;
        //   console.log(chipsGesamtSpieler);
        //   if (marktchips.colour >= 4) {
        //   }
        // },
    },

    seed: "random-seed",

    turn: {
        order: TurnOrder.DEFAULT,

        onBegin: (onBegin) => {},
        onEnd: (onEnd) => {},

        minMoves: 1,
        maxMoves: 1,
    },

    minPlayers: 2,
    maxPlayers: 4,

    disableUndo: true,

    endIf: (endIf) => {},
};
