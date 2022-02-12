var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', (req, res, next) => {
  const { email, password } = req.body
  // const id = req.params.id
  console.log(req.body)
  if (email === "ritorai@gmail.com" && password === "1234") {
    res.status(201).json({ msg: "successful login", email: email })
  }
  res.status(403).json({ msg: "login failed", data: res })
});

module.exports = router;
