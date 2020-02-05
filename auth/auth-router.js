const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.getBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!`});
      } else {
        res.status(401).json({ message: `Incorrect Credentials` });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// REGISTRATION ENDPOINT GOES HERE
router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  Users.insert(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// LOGOUT ENDPOINT
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.json({
          message: "Vacating the site is allowed"
        });
      } else {
        res.status(200).json({
          message: "See you next time!"
        });
      }
    });
  } else {
    res.status(200).json({
      message: "Make sure you login"
    });
  }
});

module.exports = router;
