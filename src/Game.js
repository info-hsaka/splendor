import { TurnOrder } from "boardgame.io/core";

// Karten
const Seltenheit1 = [{farbe: "blau", Siegpunkte: 2, Preis: {rot:1, gruen:3, blau:2, weiss: 0, schwarz:0}}]
const Seltenheit2 = [{ farbe: "rot", Siegpunkte: 3, Preis: { rot: 0, gruen: 0, blau: 5, weiss: 3, schwarz: 1 } }]
const Seltenheit3 = [{ farbe: "gruen", Siegpunkte: 4, Preis: { rot: 0, gruen: 0, blau: 7, weiss: 0, schwarz: 0 } }]

// Nobles
const nobles = [{Siegpunkte: 3, Preis: {rot: 0, gruen: 4, blau: 4, weiss: 0, schwarz: 0}}]

export const Game = {
  setup: (setup) => {
    return {};
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

  endIf: (endIf) => { },
  


};
