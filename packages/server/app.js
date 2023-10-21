const Express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config();

const { v1Router } = require("./routes");
const { socketConnection } = require("./sockets");

class ExpressServer {
  routes() {
    return {
      //   "/": healthController(),
      "/api": v1Router(),
    };
  }

  async bootstrap(routes) {
    const app = Express();
    app.use(cors());
    app.use(Express.json());

    // Apply routes
    Object.keys(routes).forEach((path) => app.use(path, routes[path]));

    return app;
  }

  registerSocketEvents(socket, eventHandlers) {
    for (const [eventName, handler] of Object.entries(eventHandlers)) {
      socket.on(eventName, handler);
    }
  }

  async start() {
    const app = await this.bootstrap(this.routes());

    const port = process.env.PORT;
    const onReady = () => {
      console.info(`Server listening on port ${port}`);
    };

    const server = http.createServer(app).listen(port, onReady);
    socketConnection(server);

    // database connection
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB Connection Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}

module.exports = { ExpressServer };
