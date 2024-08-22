import type { Socket } from "socket.io";

type Message = {
  content: string;
  id: string;
  createdAt: Date;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
};

export const receiveMessage = (socket: Socket) => {
  socket.on(
    "receive_message",
    (channelId: string, serverId: string, message: Message) => {
      socket
        .to(`@messages:${serverId}:${channelId}`)
        .emit("message_polling", message);
    }
  );
};
