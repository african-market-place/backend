const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");
const { check, validationResult, withMessage } = require("express-validator");

const genToken = require("./token");

router.post(
  "/login",
  [check("username").isEmail(), check("password").isLength({ min: 5 })],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ erorrs: errors.array() });
    }
    let { username, password } = req.body;

    Users.getBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          console.log(user);
          const token = genToken(user);
          console.log(token);

          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token
          });
        } else if (user && user.password === "Token") {
          const token = genToken(user);
          console.log(token);

          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token
          });
        } else {
          res.status(401).json({ message: "Incorrect Credentials" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  }
);

// REGISTRATION ENDPOINT GOES HERE
router.post(
  "/register",
  [
    check("username")
      .isEmail()
      .withMessage("Username must be valid Email Address"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Password must be longer than 5 characters")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ erorrs: errors.array() });
    }
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
  }
);

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
