import { Server } from "socket.io";
import { Redis } from "ioredis";

const pub = new Redis({
  host: "redis-8f39bdf-ping-me.a.aivencloud.com",
  port: 10113,
  username: "default",
  password: "AVNS_qgTzgu5o5hitMW9Rq_B",
});
const sub = new Redis({
  host: "redis-8f39bdf-ping-me.a.aivencloud.com",
  port: 10113,
  username: "default",
  password: "AVNS_qgTzgu5o5hitMW9Rq_B",
});

class SocketService {
  //created an io server
  private _io: Server;

  //constructor
  constructor() {
    console.log("Init Socket Service");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
    sub.subscribe("MESSAGES");
  }

  // event listners
  public initListener() {
    const io = this._io;
    io.on("connect", (socket) => {
      console.log(`new Socket Connected:`, socket.id);

      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New Message Recieved:", message);
        await pub.publish("MESSAGES", JSON.stringify({ message }));
      });
    });
    sub.on("message", (channel, message) => {
      if (channel === "MESSAGES") {
        io.emit("message", message);
      }
    });
  }

  // getter
  get io() {
    return this._io;
  }
}
export default SocketService;
