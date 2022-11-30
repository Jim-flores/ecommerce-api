const { Router } = require("express");

const { getAllUsers, createUser } = require("../Controllers/users.controllers");

const router = Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);

module.exports = router;
