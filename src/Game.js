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
        Farbe: "grün",
        Siegpunkte: 1,
        Preis: { rot: 0, gruen: 0, blau: 3, weiss: 2, schwarz: 2 },
    },
];
const Seltenheit3Deck = [
    {
        farbe: "blau",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    }, // keine echte Karte nur beispiel
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
        chips: { gruen: 0, rot: 0, blau: 0, weiss: 0, schwarz: 0, gelb: 0 },

        karten: [],

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

        const markt = {

          
            

            marktChips: chipsReservoir,

            reiheNobles: [
                {
                    Siegpunkte: 3,
                    Preis: { rot: 0, gruen: 4, blau: 4, weiss: 0, schwarz: 0 },
                },
                {
                    Siegpunkte: 3,
                    Preis: { rot: 0, gruen: 4, blau: 4, weiss: 0, schwarz: 0 },
                },
                {
                    Siegpunkte: 3,
                    Preis: { rot: 0, gruen: 4, blau: 4, weiss: 0, schwarz: 0 },
                },
            ],

            reihen: [
                //reihe1
                [
                    {
                        farbe: "blau",
                        Siegpunkte: 1,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 2,
                            weiss: 8,
                            schwarz: 1,
                        },
                    }, //karten aus seltenheit 1 als beispiel
                    {
                        farbe: "schwarz",
                        Siegpunkte: 1,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 2,
                            weiss: 0,
                            schwarz: 0,
                        },
                    },
                    {
                        farbe: "weiss",
                        Siegpunkte: 0,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 2,
                            weiss: 0,
                            schwarz: 7,
                        },
                    },
                    {
                        farbe: "rot",
                        Siegpunkte: 0,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 2,
                            weiss: 0,
                            schwarz: 0,
                        },
                    },
                ],
                //reihe2
                [
                    {
                        farbe: "blau",
                        Siegpunkte: 1,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 0,
                            weiss: 8,
                            schwarz: 0,
                        },
                    }, //karten aus seltenheit 1 als beispiel
                    {
                        farbe: "gruen",
                        Siegpunkte: 2,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 2,
                            weiss: 0,
                            schwarz: 0,
                        },
                    },
                    {
                        farbe: "schwarz",
                        Siegpunkte: 2,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 2,
                            weiss: 0,
                            schwarz: 0,
                        },
                    },
                    {
                        farbe: "weiss",
                        Siegpunkte: 2,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 2,
                            weiss: 0,
                            schwarz: 0,
                        },
                    },
                ],
                //reihe3
                [
                    {
                        farbe: "rot",
                        Siegpunkte: 2,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 2,
                            weiss: 0,
                            schwarz: 4,
                        },
                    }, //karten aus seltenheit 1 als beispiel
                    {
                        farbe: "blau",
                        Siegpunkte: 2,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 2,
                            weiss: 0,
                            schwarz: 0,
                        },
                    },
                    {
                        farbe: "schwarz",
                        Siegpunkte: 2,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 2,
                            weiss: 0,
                            schwarz: 0,
                        },
                    },
                    {
                        farbe: "gruen",
                        Siegpunkte: 2,
                        Preis: {
                            rot: 1,
                            gruen: 3,
                            blau: 2,
                            weiss: 0,
                            schwarz: 0,
                        },
                    },
                ],
            ],
        };

        const stapel1 = random.Shuffle(Seltenheit1Deck);
        const stapel2 = random.Shuffle(Seltenheit2Deck);
        const stapel3 = random.Shuffle(Seltenheit3Deck);

        let i = 0;
        let y = 0;
        const reihe1 = [];
        const reihe2 = [];
        const reihe3 = [];
        const reiheNobles = [];
        while (i < 4) {
            reihe1.push(stapel1.pop());
            reihe2.push(stapel2.pop());
            reihe3.push(stapel3.pop());
            i++;
        }
        while (y < 3) {
            reiheNobles.push(nobles.pop());
            y++;
        }
        return {
            reihe1: reihe1,
            reihe2: reihe2,
            reihe3: reihe3,
            reiheNobles: reiheNobles,
            markt: markt,
            einzelneSpielerHaende: einzelneSpielerHaende,
            chipsReservoir : chipsReservoir,

        };
    },

    moves: {
        //move.G.reihen[reiheID][positionID]: objekt mit Karteninformation reihe1[1]

        karteKaufen(move, reiheID, positionID) {
            //reiheID : "1" positionID : "1"

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

            while (i < Spielerhand.karten.length) {
                if (Spielerhand.karten[i].farbe == "blau") {
                    AnzahlHandKarten.blau = AnzahlHandKarten.blau + 1;
                } else if (Spielerhand.karten[i].farbe == "gruen") {
                    AnzahlHandKarten.gruen = AnzahlHandKarten.gruen + 1;
                } else if (Spielerhand.karten[i].farbe == "rot") {
                    AnzahlHandKarten.rot = AnzahlHandKarten.rot + 1;
                } else if (Spielerhand.karten[i].farbe == "weiss") {
                    AnzahlHandKarten.weiss = AnzahlHandKarten.weiss + 1;
                } else if (Spielerhand.karten[i].farbe == "schwarz") {
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

                Spielerhand.karten.push(move.G.reihen[reiheID][positionID]);
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

                Spielerhand.karten.push(move.G.reihen[reiheID][positionID]);

                if (
                    move.G.reihen[reiheID][positionID].Preis.gruen -
                        AnzahlHandKarten.gruen >
                    0
                ) {
                    Spielerhand.chips.gruen =
                        Spielerhand.chips.gruen -
                        (move.G.reihen[reiheID][positionID].Preis.gruen -
                            AnzahlHandKarten.gruen);
                }
                if (
                    move.G.reihen[reiheID][positionID].Preis.rot -
                        AnzahlHandKarten.rot >
                    0
                ) {
                    Spielerhand.chips.rot =
                        Spielerhand.chips.rot -
                        (move.G.reihen[reiheID][positionID].Preis.rot -
                            AnzahlHandKarten.rot);
                }
                if (
                    move.G.reihen[reiheID][positionID].Preis.weiss -
                        AnzahlHandKarten.weiss >
                    0
                ) {
                    Spielerhand.chips.weiss =
                        Spielerhand.chips.weiss -
                        (move.G.reihen[reiheID][positionID].Preis.weiss -
                            AnzahlHandKarten.weiss);
                }
                if (
                    move.G.reihen[reiheID][positionID].Preis.schwarz -
                        AnzahlHandKarten.schwarz >
                    0
                ) {
                    Spielerhand.chips.schwarz =
                        Spielerhand.chips.schwarz -
                        (move.G.reihen[reiheID][positionID].Preis.schwarz -
                            AnzahlHandKarten.schwarz);
                }
                if (
                    move.G.reihen[reiheID][positionID].Preis.blau -
                        AnzahlHandKarten.blau >
                    0
                ) {
                    Spielerhand.chips.blau =
                        Spielerhand.chips.blau -
                        (move.G.reihen[reiheID][positionID].Preis.blau -
                            AnzahlHandKarten.blau);
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
