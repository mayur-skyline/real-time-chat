const { Router } = require("express");
const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require("../controllers/userController");

const authRouter = () => {
  const router = Router();

  router.post("/login", login);
  router.post("/register", register);
  router.get("/allusers/:id", getAllUsers);
  router.post("/setavatar/:id", setAvatar);
  router.get("/logout/:id", logOut);

  return router;
};

module.exports = { authRouter };
