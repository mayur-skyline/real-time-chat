const { Router } = require("express");
const { authRouter } = require("./auth");
const { messageRouter } = require("./messages");

const v1Router = () => {
  const router = Router();

  router.use("/auth", authRouter());
  router.use("/messages", messageRouter());

  return router;
};

module.exports = { v1Router };
