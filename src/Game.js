import { TurnOrder } from "boardgame.io/core"

// Karten
const Seltenheit1 = [
    {
        Farbe: "blau",
        Siegpunkte: 2,
        Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
    },
]
const Seltenheit2 = [
    {
        Farbe: "rot",
        Siegpunkte: 3,
        Preis: { rot: 0, gruen: 0, blau: 5, weiss: 3, schwarz: 1 },
    },
]
const Seltenheit3 = [
    {
        Farbe: "gruen",
        Siegpunkte: 4,
        Preis: { rot: 0, gruen: 0, blau: 7, weiss: 0, schwarz: 0 },
    },
]

// Nobles
const nobles = [
    {
        Siegpunkte: 3,
        Preis: { rot: 0, gruen: 4, blau: 4, weiss: 0, schwarz: 0 },
    },
]

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
]

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
]

console.log(Seltenheit1Deck[0])
export const Game = {
    setup: (setup) => {
        //beispiel für spieler
        spieler1 = {
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
                }, //Seltenheit1[0]
            ],

            nobels: [
                {
                    Siegpunkte: 3,
                    Preis: { rot: 0, gruen: 4, blau: 4, weiss: 0, schwarz: 0 },
                },
            ],

      reservierteKarten: [
        { farbe: "gruen", Siegpunkte: 4, Preis: { rot: 0, gruen: 0, blau: 7, weiss: 0, schwarz: 0 } }
      ],
 
      
    }
    
    markt =  {
      reiheNobels: [{Siegpunkte: 3, Preis: {rot: 0, gruen: 4, blau: 4, weiss: 0, schwarz: 0}},
                    {Siegpunkte: 3, Preis: {rot: 0, gruen: 4, blau: 4, weiss: 0, schwarz: 0}}, 
                    {Siegpunkte: 3, Preis: {rot: 0, gruen: 4, blau: 4, weiss: 0, schwarz: 0}}],

            reservierteKarten: [
                {
                    farbe: "gruen",
                    Siegpunkte: 4,
                    Preis: { rot: 0, gruen: 0, blau: 7, weiss: 0, schwarz: 0 },
                },
            ],
        }

        markt = {
            reiheNobels: [
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

            reihe1: [
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
                {
                    farbe: "blau",
                    Siegpunkte: 2,
                    Preis: { rot: 1, gruen: 3, blau: 2, weiss: 0, schwarz: 0 },
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

            stapel1: [],

            stapel2: [],

            stapel3: [],
        }
        return {}
    },

    moves: {
        playCard: (playCard, cardIndex) => {},
        drawCard: (drawCard) => {},
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
}
