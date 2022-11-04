var express = require('express');
var async = require('async');
var router = express.Router();

// Require controller modules.
var hero_controller = require("../controllers/heroController");
var pet_controller = require("../controllers/petController");
var Hero = require("../models/hero")
var Pet = require("../models/pet")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET
router.get('/init', function(req, res) {

  hero_controller.serverInit()
  pet_controller.serverInit()
  res.send("OP done")
  
})
// GET request for creating a heroes.
router.get('/heroes', hero_controller.hero_list);

// GET request for creating a hero.
router.get('/hero/:id', hero_controller.hero_detail);

// POST request for creating hero.
router.post('/hero', hero_controller.hero_create);

// PUT request to update Book.
router.put('/hero/:id', hero_controller.hero_update);

// DELETE request to update Book.
router.delete('/hero/:id', hero_controller.hero_delete);

// GET request for pet list.
router.get('/pets', pet_controller.pet_list);

// GET request for one Pet.
router.get('/pet/:id', pet_controller.pet_detail);

module.exports = router;
