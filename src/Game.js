import { TurnOrder } from "boardgame.io/core";

const Seltenheit3 = [{farbe: grün, Siegpunkte: 4, Preis: {rot:0, grün:0, blau:7, weiß: 0, schwarz:0}}]

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
