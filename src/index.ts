import express from "express";
import cors from "cors";
import { env } from "~/env";
import { Server } from "socket.io";
import http from "http";
import { connectGuild } from "./routes/connect-guild";
import { receiveMessage } from "./routes/receive-message";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  connectGuild(socket);
  receiveMessage(socket);
});

server.listen(env.PORT, () => console.log("Socket is running", env.PORT));
