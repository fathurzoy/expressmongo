const express = require("express");
const router = express.Router();

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

router.get("/", myLogger, function (req, res) {
  res.send("Hello World!");
});

router.get("/users ", function (req, res) {
  const name = req.query.name; //query builder
  const age = req.query.age;

  res.send(name + " " + age);
});

// query
router.get("/users", function (req, res) {
  const name = req.query.name; //query builder
  const age = req.query.age;

  res.send(name + " " + age);
});

// params
router.get("/users/:id", function (req, res) {
  const id = req.params.id;
  console.log(id);
  if (Number(id) === 1) {
    const user = {
      id: 1,
      name: "fathur",
      age: 25,
    };
    res.send(user);
  } else {
    const user = {
      id: 2,
      name: "ozan",
      age: 25,
    };
    res.send(user);
  }
});

// router.get("/users/2", function (req, res) {
//   const user = {
//     id: 2,
//     name: "rahman",
//     age: 25,
//   };
//   res.send(user);
// });

router.post("/user", function (req, res) {
  res.send("Got a POST request");
});

router.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
});

router.delete("/user", function (req, res) {
  res.send("Got a DELETE request at /user");
});

module.exports = router;
