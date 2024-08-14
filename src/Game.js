/** @import { Game } from "boardgame.io" */

import { TurnOrder } from "boardgame.io/core";

// Karten
const Seltenheit1 = [
  {
    Farbe: "blau",
    Siegpunkte: 2,
    Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
  },
];
const Seltenheit2 = [
  {
    Farbe: "rot",
    Siegpunkte: 3,
    Preis: { rot: 0, gruen: 0, blau: 5, weiss: 3, schwarz: 1 },
  },
];
const Seltenheit3 = [
  {
    Farbe: "gruen",
    Siegpunkte: 4,
    Preis: { rot: 0, gruen: 0, blau: 7, weiss: 0, schwarz: 0 },
  },
];

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

//Chips deck
const ChipsReservoir = {
  gruen: 7,
  blau: 7,
  schwarz: 7,
  rot: 7,
  weiss: 7,
  gelb: 5,
};

/** @type {Game} */
export const Game = {
  setup: ({ random }) => {
    //beispiel für spieler1
    const spieler1 = {
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

      reihe2: [
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

      reihe3: [
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
    };

    const Seltenheit3Deck = [];

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
    };
  },

  moves: {
    //todo kartenid
    karteKaufen(move, KarteID) {
      let i = 0;
      //gekaufte Karten die in der Spielerhand sind
      let AnzahlHandKarten = {
        rot: 0,
        gruen: 0,
        blau: 0,
        weiss: 0,
        schwarz: 0,
      };

      while (i < karten.length + 1) {
        if (karten[i].farbe == "blau") {
          AnzahlHandKarten.blau = AnzahlHandKarten.blau + 1;
        } else if (karten[i].farbe == "gruen") {
          AnzahlHandKarten.gruen = AnzahlHandKarten.gruen + 1;
        } else if (karten[i].farbe == "rot") {
          AnzahlHandKarten.rot = AnzahlHandKarten.rot + 1;
        } else if (karten[i].farbe == "weiss") {
          AnzahlHandKarten.weiss = AnzahlHandKarten.weiss + 1;
        } else if (karten[i].farbe == "schwarz") {
          AnzahlHandKarten.schwarz = AnzahlHandKarten.schwarz + 1;
        }
        i = i + 1;
      }
      if (
        karten.Preis.gruen <= AnzahlHandKarten.gruen &&
        karten.Preis.rot <= AnzahlHandKarten.rot &&
        karten.Preis.blau <= AnzahlHandKarten.blau &&
        karten.Preis.schwarz <= AnzahlHandKarten.schwarz &&
        karten.Preis.weiss <= AnzahlHandKarten.weiss
      ) {
      }
    },
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
