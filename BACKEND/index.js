
// IMPORTING REQUIRED MODULES
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const express = require('express');
const path = require('path');
const app = express();


const foods = require("./routers/food-routes.js");
const users = require("./routers/user-routes.js");


app.use("/canteen/food", foods);
app.use("/canteen/user", users);
app.use(express.static("public"));


// SELECTING THE PORT
const port = 80;


// IMPORTING SCHEMA OF FOOD ITEMS FROM "model.js"
const Menu = require("./model.js");



app.use(bodyParser.urlencoded({
  extended: true
}));


main().catch(err => console.log(err));


// CONNECTING MONGOOSE AND MONGODB
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/canteen').then(() => {
    console.log("Connected to Database");
    app.listen(port);
  }).catch(err => { console.log("Error in connecting to database"); console.log(err) });
  console.log("WE ARE NOW CONNECTED");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



// DISPLAYING ALL FOOD ITEMS AVAILABLE IN OUR MENU
const menuitems = Menu.find({}).then((err, posts) => {
  if (err) {
    console.error(err);
  } else {
    console.log(posts);
  }
});
console.log(menuitems);

