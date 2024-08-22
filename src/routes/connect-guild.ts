import type { Socket } from "socket.io";

export const connectGuild = (socket: Socket) => {
  socket.on("connect_guild", (channelId: string, serverId: string) => {
    socket.join(`@messages:${serverId}:${channelId}`);
  });
};
