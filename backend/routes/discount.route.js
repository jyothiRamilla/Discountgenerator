const express = require('express');
const app = express();
const discountRoute = express.Router();

// Discount model
let Discount = require('../models/Discount');

// Add Discount
discountRoute.route('/create').post((req, res, next) => {
  Discount.find({dcode : req.body.dcode},function (err,docs){
    if(docs.length){
      var err = new Error('Coupon Code already exists');
      return next(err);
    }
    else{
    Discount.create(req.body, (error, data) => {
      if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  }
  
});
});

// Get All Discounts
discountRoute.route('/').get((req, res) => {
  Discount.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Discount
discountRoute.route('/read/:id').get((req, res) => {
  Discount.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Discount
discountRoute.route('/update/:id').put((req, res, next) => {
  Discount.findByIdAndUpdate(req.params.id, {
    
    $set: req.body
  
  }, (error, data) => {
   
    if (error) {
      return next(error);
      console.log(error)
    } else {
      console.log(data)
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Discount
discountRoute.route('/delete/:id').delete((req, res, next) => {
  Discount.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = discountRoute;