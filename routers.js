const { ObjectId } = require("bson");
const express = require("express");
const router = express.Router();
const connection = require("./connection");

router.get("/", function (req, res) {
  res.send("Hello World!");
});

//get
router.get("/users", async (req, res) => {
  try {
    if (connection.connect()) {
      const db = connection.db("db_latihan");
      const users = await db.collection("users").find().toArray();
      res.send({ data: users });
    } else {
      res.send({ message: "Koneksi database gagal" });
    }
  } catch (err) {
    res.send({ message: err.message || "internal server error" });
  }
});

//post
router.post("/users", async (req, res) => {
  try {
    if (connection.connect()) {
      const { name, age, status } = req.body;
      const db = connection.db("db_latihan");
      const users = await db.collection("users").insertOne({
        name,
        age,
        status,
      });
      console.log("users >>");
      console.log(users);
      if (users.insertedId === 1) {
        res.send({ message: "berhasil ditambahkan" });
      } else {
        res.send({ message: "gagal menambah user" });
      }
    } else {
      res.send({ message: "Koneksi database gagal" });
    }
  } catch (err) {
    res.send({ message: err.message || "internal server error" });
  }
});

//put
router.put("/users/:id", async (req, res) => {
  try {
    if (connection.connect()) {
      const { id } = req.params;
      const { name, age, status } = req.body;
      const db = connection.db("db_latihan");
      const users = await db.collection("users").updateOne(
        { _id: ObjectId(id) },
        {
          $set: {
            name,
            age,
            status,
          },
        }
      );
      console.log("users >>");
      console.log(users);
      if (users.modifiedCount === 1) {
        res.send({ message: "berhasil diubah" });
      } else {
        res.send({ message: "gagal diubah user" });
      }
    } else {
      res.send({ message: "Koneksi database gagal" });
    }
  } catch (err) {
    res.send({ message: err.message || "internal server error" });
  }
});

//put
router.delete("/users/:id", async (req, res) => {
  try {
    if (connection.connect()) {
      const { id } = req.params;
      const db = connection.db("db_latihan");
      const users = await db
        .collection("users")
        .deleteOne({ _id: ObjectId(id) });

      console.log("users >>");
      console.log(users);
      if (users.deletedCount === 1) {
        res.send({ message: "berhasil hapus" });
      } else {
        res.send({ message: "gagal hapus user" });
      }
    } else {
      res.send({ message: "Koneksi database gagal" });
    }
  } catch (err) {
    res.send({ message: err.message || "internal server error" });
  }
});

module.exports = router;
