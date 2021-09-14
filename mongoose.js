// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/db_latihan");
}

// const carSchema = new mongoose.Schema({
//   name: String,
// });

// const Car = mongoose.model("Car", carSchema);

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   //we're connect
//   const car = new Car({ name: "ferari" });
//   car.save((err, result) => {
//     if (err) return console.log(err);
//     console.log(result);
//   });
// });

//*-----------------------------------

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "nama tidak boleh kosong"],
//   },
//   age: { type: Number, required: [true, "umur tidak boleh kosong"] },
//   status: {
//     type: String,
//     enum: ["active", "non active"],
//     default: "non active",
//   },
// });

// const User = mongoose.model("User", userSchema);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", async () => {
  //we're connect
  console.log("server database connect");

  // //*find all
  // const users = await User.find(); //findall
  // console.log(users);

  // *findby id
  // const users = await User.findOne({ _id: "61403db004a75e062486d219" }); //findby id
  // console.log(users);

  //*create
  // const newUser = await User.create({ //create user
  //   name: "fafa",
  //   age: 22,
  //   status: "active",
  // });
  // console.log(newUser);

  // const newUser = new User(); //insert user
  // (newUser.name = "pop"), (newUser.age = 19), (newUser.status = "non active");
  // const insert = await newUser.save();
  // console.log(insert);

  // * update
  // const updateUser = await User.updateOne(
  //   { _id: "61404c5271345c2d0167c1ac" },
  //   { name: "popo" }
  // );

  // const updateUser = await User.findById("61404c5271345c2d0167c1ac");
  // updateUser.name = "pos";
  // const update = await updateUser.save();
  // console.log(updateUser);

  // //* delete
  // const deleteUser = await User.deleteOne({ _id: "61404beb92feb3ddcc04a4f0" });
  // console.log(deleteUser);

  // // //*validasi
  // const user = await User.create({});
  // console.log(user);
});
