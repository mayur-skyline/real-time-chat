import { Router } from "express";
import { authRouter } from "./auth.js";
import { messageRouter } from "./messages.js";

export const v1Router = () => {
  const router = Router();

  router.use("/auth", authRouter());
  router.use("/messages", messageRouter());

  return router;
};
