const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers");

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);

app.use(router);

//pindahin router ke routers.js

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

// app.get("/users ", function (req, res) {
//   const name = req.query.name; //query builder
//   const age = req.query.age;

//   res.send(name + " " + age);
// });

// // query
// app.get("/users", function (req, res) {
//   const name = req.query.name; //query builder
//   const age = req.query.age;

//   res.send(name + " " + age);
// });

// // params
// app.get("/users/:id", function (req, res) {
//   const id = req.params.id;
//   console.log(id);
//   if (Number(id) === 1) {
//     const user = {
//       id: 1,
//       name: "fathur",
//       age: 25,
//     };
//     res.send(user);
//   } else {
//     const user = {
//       id: 2,
//       name: "ozan",
//       age: 25,
//     };
//     res.send(user);
//   }
// });

// // app.get("/users/2", function (req, res) {
// //   const user = {
// //     id: 2,
// //     name: "rahman",
// //     age: 25,
// //   };
// //   res.send(user);
// // });

// app.post("/user", function (req, res) {
//   res.send("Got a POST request");
// });

// app.put("/user", function (req, res) {
//   res.send("Got a PUT request at /user");
// });

// app.delete("/user", function (req, res) {
//   res.send("Got a DELETE request at /user");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
