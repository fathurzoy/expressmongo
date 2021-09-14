const { ObjectId } = require("bson");
const express = require("express");
const router = express.Router();
// const connection = require("./connection");
require("./mongoose");
const User = require("./User");

router.get("/", function (req, res) {
  res.send("Hello World!");
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.send({ data: users });
  } catch (err) {
    res.send({ message: err.message || "internal server error" });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (user) {
      res.send({
        data: user,
      });
    } else {
      res.send({ message: "user tidak ditemukan" });
    }
  } catch (err) {
    res.send({ message: err.message || "internal server error" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { name, age, status } = req.body;
    const user = await User.create({
      name,
      age,
      status,
    });

    res.send({
      data: user,
    });
  } catch (err) {
    res.send({ message: err.message || "internal server error" });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, status } = req.body;
    const user = await User.updateOne(
      { _id: id },
      {
        name,
        age,
        status,
      },
      { runValidators: true }
    );

    if (user.modifiedCount) {
      res.send({
        data: user,
      });
    } else {
      res.send({
        message: "user tidak ditemukan",
      });
    }
  } catch (err) {
    res.send({ message: err.message || "internal server error" });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.deleteOne({ _id: id });

    if (user.deletedCount) {
      res.send({
        data: user,
      });
    } else {
      res.send({
        message: "user tidak ditemukan",
      });
    }
  } catch (err) {
    res.send({ message: err.message || "internal server error" });
  }
});

// //get
// router.get("/users", async (req, res) => {
//   try {
//     if (connection.connect()) {
//       const db = connection.db("db_latihan");
//       const users = await db.collection("users").find().toArray();
//       res.send({ data: users });
//     } else {
//       res.send({ message: "Koneksi database gagal" });
//     }
//   } catch (err) {
//     res.send({ message: err.message || "internal server error" });
//   }
// });

// //post
// router.post("/users", async (req, res) => {
//   try {
//     if (connection.connect()) {
//       const { name, age, status } = req.body;
//       const db = connection.db("db_latihan");
//       const users = await db.collection("users").insertOne({
//         name,
//         age,
//         status,
//       });
//       console.log("users >>");
//       console.log(users);
//       if (users.insertedId === 1) {
//         res.send({ message: "berhasil ditambahkan" });
//       } else {
//         res.send({ message: "gagal menambah user" });
//       }
//     } else {
//       res.send({ message: "Koneksi database gagal" });
//     }
//   } catch (err) {
//     res.send({ message: err.message || "internal server error" });
//   }
// });

// //put
// router.put("/users/:id", async (req, res) => {
//   try {
//     if (connection.connect()) {
//       const { id } = req.params;
//       const { name, age, status } = req.body;
//       const db = connection.db("db_latihan");
//       const users = await db.collection("users").updateOne(
//         { _id: ObjectId(id) },
//         {
//           $set: {
//             name,
//             age,
//             status,
//           },
//         }
//       );
//       console.log("users >>");
//       console.log(users);
//       if (users.modifiedCount === 1) {
//         res.send({ message: "berhasil diubah" });
//       } else {
//         res.send({ message: "gagal diubah user" });
//       }
//     } else {
//       res.send({ message: "Koneksi database gagal" });
//     }
//   } catch (err) {
//     res.send({ message: err.message || "internal server error" });
//   }
// });

// //put
// router.delete("/users/:id", async (req, res) => {
//   try {
//     if (connection.connect()) {
//       const { id } = req.params;
//       const db = connection.db("db_latihan");
//       const users = await db
//         .collection("users")
//         .deleteOne({ _id: ObjectId(id) });

//       console.log("users >>");
//       console.log(users);
//       if (users.deletedCount === 1) {
//         res.send({ message: "berhasil hapus" });
//       } else {
//         res.send({ message: "gagal hapus user" });
//       }
//     } else {
//       res.send({ message: "Koneksi database gagal" });
//     }
//   } catch (err) {
//     res.send({ message: err.message || "internal server error" });
//   }
// });

module.exports = router;
