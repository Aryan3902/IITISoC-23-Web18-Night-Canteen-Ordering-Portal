const mongoose = require('mongoose');
const canteenmenu = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  id: String
});



//  module.exports={
//     name: String,
//     price: Number,
//     description: String,
//     id:String 
//  };


const Menu = mongoose.model('Menu', canteenmenu);
module.exports = Menu;
// export default canteenmenu;
