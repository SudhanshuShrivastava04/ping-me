import http from "http";
import SocketService from "./services/socket";

// init ports and server
async function init() {
  // create a new socket service
  const socketService = new SocketService();
  console.log("Init Socket Listeners");
  // create a new HTTP server
  const httpServer = http.createServer();
  const PORT = process.env.PORT ? process.env.PORT : 8000;

  //attach both HTTP and socket server
  socketService.io.attach(httpServer);

  httpServer.listen(PORT, () =>
    console.log(`HTTP Server started at PORT:${PORT}`)
  );

  socketService.initListener();
}
init();
