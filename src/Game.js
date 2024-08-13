import { TurnOrder } from "boardgame.io/core";

const Seltenheit1 = [{farbe: "blau", Siegpunkte: 2, Preis: {rot:1, gruen:3, blau:2, weiß: 0, schwarz:0}}]
const Seltenheit2 = [{ farbe: "rot", Siegpunkte: 3, Preis: { rot: 0, gruen: 0, blau: 5, weiß: 3, schwarz: 1 } }]
const Seltenheit3 = [{ farbe: "gruen", Siegpunkte: 4, Preis: { rot: 0, gruen: 0, blau: 7, weiß: 0, schwarz: 0 } }]

console.log(Seltenheit1)

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
