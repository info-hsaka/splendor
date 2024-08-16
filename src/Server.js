import { Server } from "boardgame.io/server";
import { Game } from "./Game";
import serve from "koa-static";

const server = Server({
  games: [Game],
  origins: [/.*/],
});

server.app.use(serve("dist"));

server.run(process.env.PORT ?? 8000);
