import { Server } from "socket.io";

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
  }

  // event listners
  public initListener() {
    const io = this._io;
    io.on("connect", (socket) => {
      console.log(`new Socket Connected`, socket.id);

      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New Message Recieved", message);
      });
    });
  }

  // getter
  get io() {
    return this._io;
  }
}
export default SocketService;
