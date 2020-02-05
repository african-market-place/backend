const router = require("express").Router();
const Users = require("./users-model");
const authenticate = require("../auth/middleware/authenticate-middleware");
router.get("/", authenticate, (req, res) => {
  Users.get()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Users.getById(id)
    .then(users => {
      const username = users;
      res.status(200).json({ username });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", authenticate, (req, res) => {
  const id = req.params.id;

  Users.deleteUser(id)
    .then(deletedUser => {
      res.status(200).json({ message: "User successfully deleted." });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
