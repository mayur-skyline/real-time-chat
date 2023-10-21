const { addMessage, getMessages } = require("../controllers/messageController");

const { Router } = require("express");

const messageRouter = () => {
  const router = Router();

  router.post("/addmsg/", addMessage);
  router.post("/getmsg/", getMessages);

  return router;
};

module.exports = { messageRouter };
