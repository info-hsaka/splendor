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
//Chips deck
const ChipsReservoir = {
  gruen: 7,
  blau: 7,
  schwarz: 7,
  rot: 7,
  weiss: 7,
  gelb: 5,
};

console.log(Seltenheit1Deck[0]);

function SpielerSetup() {
  const SpielerHandStart = {
    Chips: { gruen: 0, rot: 0, blau: 0, weiss: 0, schwarz: 0, gelb: 0 },

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

    //beispiel für Spielerhand
    const Spielerhand = {
      chips: {
        gruen: 5, //beispiele
        rot: 1,
        blau: 2,
        weiss: 0,
        schwarz: 1,
        gelb: 0,
      },

      karten: [
        {
          farbe: "blau",
          Siegpunkte: 2,
          Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
        },
      ],

      Nobles: [
        {
          Siegpunkte: 3,
          Preis: { rot: 0, gruen: 4, blau: 4, weiss: 0, schwarz: 0 },
        },
      ],

      reservierteKarten: [
        {
          farbe: "gruen",
          Siegpunkte: 4,
          Preis: { rot: 0, gruen: 0, blau: 7, weiss: 0, schwarz: 0 },
        },
      ],
    };

    const markt = {
      marktChips: ChipsReservoir,

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
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
          }, //karten aus seltenheit 1 als beispiel
          {
            farbe: "blau",
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
          },
          {
            farbe: "blau",
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
          },
          {
            farbe: "blau",
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
          },
        ],
        //reihe2
        [
          {
            farbe: "blau",
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
          }, //karten aus seltenheit 1 als beispiel
          {
            farbe: "blau",
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
          },
          {
            farbe: "blau",
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
          },
          {
            farbe: "blau",
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
          },
        ],
        //reihe3
        [
          {
            farbe: "blau",
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
          }, //karten aus seltenheit 1 als beispiel
          {
            farbe: "blau",
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
          },
          {
            farbe: "blau",
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
          },
          {
            farbe: "blau",
            Siegpunkte: 2,
            Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
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
    };
  },

  moves: {
    //karteID: objekt mit Karteninformation reihe1[1]
    karteKaufen(move, karteID, reiheID, positionID) {
      //reiheID : "reihe1" positionID : "1"
      console.log("kaufe KarteID!");
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
      console.log(karteID);
      console.log(AnzahlHandKarten);
      if (
        karteID.Preis.gruen <= AnzahlHandKarten.gruen &&
        karteID.Preis.rot <= AnzahlHandKarten.rot &&
        karteID.Preis.blau <= AnzahlHandKarten.blau &&
        karteID.Preis.schwarz <= AnzahlHandKarten.schwarz &&
        karteID.Preis.weiss <= AnzahlHandKarten.weiss
      ) {
        if (reiheID == "reihe1") {
          move.G.markt.reihe1.splice(positionID, 1);
          move.G.markt.reihe1.splice(positionID, 0, Seltenheit1Deck.pop());
        } else if (reiheID == "reihe2") {
          move.G.markt.reihe2.splice(positionID, 1);
          move.G.markt.reihe2.splice(positionID, 0, Seltenheit2Deck.pop());
        } else if (reiheID == "reihe3") {
          move.G.markt.reihe3.splice(positionID, 1);
          move.G.markt.reihe3.splice(positionID, 0, Seltenheit3Deck.pop());
        }

        Spielerhand.karten.push(karteID);
      } else if (
        karteID.Preis.gruen <=
          AnzahlHandKarten.gruen + Spielerhand.chips.gruen &&
        karteID.Preis.rot <= AnzahlHandKarten.rot + Spielerhand.chips.rot &&
        karteID.Preis.weiss <=
          AnzahlHandKarten.weiss + Spielerhand.chips.weiss &&
        karteID.Preis.schwarz <=
          AnzahlHandKarten.schwarz + Spielerhand.chips.schwarz &&
        karteID.Preis.blau <= AnzahlHandKarten.blau + Spielerhand.chips.blau
      ) {
        if (reiheID == "reihe1") {
          move.G.markt.reihe1.splice(positionID, 1);
          move.G.markt.reihe1.splice(positionID, 0, Seltenheit1Deck.pop());
        } else if (reiheID == "reihe2") {
          move.G.markt.reihe2.splice(positionID, 1);
          move.G.markt.reihe2.splice(positionID, 0, Seltenheit2Deck.pop());
        } else if (reiheID == "reihe3") {
          move.G.markt.reihe3.splice(positionID, 1);
          move.G.markt.reihe3.splice(positionID, 0, Seltenheit3Deck.pop());
        }
        Spielerhand.karten.push(karteID);

        if (karteID.Preis.gruen - AnzahlHandKarten.gruen > 0) {
          g.chips.gruen =
            Spielerhand.chips.gruen -
            (karteID.Preis.gruen - AnzahlHandKarten.gruen);
        }
        if (karteID.Preis.rot - AnzahlHandKarten.rot > 0) {
          Spielerhand.chips.rot =
            Spielerhand.chips.rot - (karteID.Preis.rot - AnzahlHandKarten.rot);
        }
        if (karteID.Preis.weiss - AnzahlHandKarten.weiss > 0) {
          Spielerhand.chips.weiss =
            Spielerhand.chips.weiss -
            (karteID.Preis.weiss - AnzahlHandKarten.weiss);
        }
        if (karteID.Preis.schwarz - AnzahlHandKarten.schwarz > 0) {
          Spielerhand.chips.schwarz =
            Spielerhand.chips.schwarz -
            (karteID.Preis.schwarz - AnzahlHandKarten.schwarz);
        }
        if (karteID.Preis.blau - AnzahlHandKarten.blau > 0) {
          Spielerhand.chips.blau =
            Spielerhand.chips.blau -
            (karteID.Preis.blau - AnzahlHandKarten.blau);
        }
      } else {
        console.log("Nicht genug Ressourcen!");
      }
    },

    // zweiChipsZiehen(move, colour) {
    //   let chipsGesamtSpieler =
    //     move.G.einzelneSpielerHaende.Chips.gruen + //weitermachen nur ein Spieler!
    //     Chips.rot +
    //     Chips.blau +
    //     Chips.weiss +
    //     Chips.schwarz +
    //     Chips.gelb;
    //   console.log(chipsGesamtSpieler);
    //   if (marktChips.colour >= 4) {
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
