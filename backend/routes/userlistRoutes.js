const express = require("express");
const router = express.Router();
const userlistController = require("../controllers/userlistController");
router.post("/", userlistController.createUser);

router.get("/", userlistController.getUser);
router.delete("/:id", userlistController.deleteUser);
router.patch("/:id", userlistController.updateUser);


module.exports = router;
