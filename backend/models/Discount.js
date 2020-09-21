const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Discount = new Schema({
   dcode: {
      type: String,
      unique:true,
      required: 'Code can\'t be empty'
   },
   dpervalue: {
      type: Number
   },
   dinrvalue: {
      type: Number
   },
   dminreqvalue: {
      type: Number
   },
   startdate: {
      type: Date
   },
   enddate:{
       type:Date
   },
   active:{
       type:Boolean
   }

}, {
   collection: 'discount'
})

module.exports = mongoose.model('Discount', Discount)