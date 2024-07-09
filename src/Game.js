import { TurnOrder } from "boardgame.io/core";

export const Game = {
  setup: ({ ctx }) => {
    return {};
  },

  moves: {
    playCard: ({ G, ctx, playerID, events, random }, cardIndex) => {},
    drawCard: ({ G, ctx, playerID, events, random }) => {},
  },

  seed: "random-seed",

  turn: {
    order: TurnOrder.DEFAULT,

    onBegin: ({ G, ctx, events, random }) => {},
    onEnd: ({ G, ctx, events, random }) => {},

    minMoves: 1,
    maxMoves: 1,
  },

  minPlayers: 2,
  maxPlayers: 4,

  disableUndo: true,

  endIf: ({ G, ctx, random }) => {},
};
