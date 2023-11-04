import { addMessage, getMessages } from "../controllers/messageController.js";

import { Router } from "express";

const messageRouter = () => {
  const router = Router();

  router.post("/addmsg/", addMessage);
  router.post("/getmsg/", getMessages);

  return router;
};

export { messageRouter };
