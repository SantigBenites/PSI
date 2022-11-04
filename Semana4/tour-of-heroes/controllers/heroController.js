var Hero = require("../models/hero")
var Pet = require("../models/pet")
var async = require('async');

exports.hero_list = function(req, res, next) {

    Hero.find({}, 'name Pet')
        .populate("Pet")
        .exec(function (err, hero_list) {
            if (err) { return next(err); }
            //Successful, so render
            res.send(hero_list);
        });

};

exports.hero_detail = function(req, res,next) {

    Hero.findById(req.params.id)
        .populate("Pet")
        .exec(function(err, hero){
            if (err) { return next(err); }
            res.send(hero)
        });

};

exports.hero_create = function(req, res, next) {
    
    var newHero = new Hero(req.body)
    

    newHero.save(function(err){
        if (err) { return next(err); }
        res.redirect(newHero.url)
    })

};

exports.hero_update = function(req, res, next) {
    
    Hero.findById(req.params.id)
        .populate("Pet")
        .exec(function(err,hero){
            if (err) { return next(err); }
            hero.name = req.body.name

            hero.save(function(err){
                if (err) { return next(err); }
                res.redirect(hero.url)
            })
    })
                            

};

exports.hero_delete = function(req, res, next) {
    
    Hero.findByIdAndRemove(req.params.id)
        .exec(function(err,hero){
            if (err) { return next(err); }
            res.send()
        })
};

exports.serverInit = function() {

    Hero.deleteMany({},function(err,result){
        if (err) { return next(err); }
    })
    
    const PetTest = new Pet({name:"PetTest"})
    const hero1 = new Hero({name:"hero1",Pet:PetTest})
    const hero2 = new Hero({name:"hero2"})
    const hero3 = new Hero({name:"hero3"})

    PetTest.save(function(err){
        if (err) { return next(err); }
    })

    hero1.save(function(err){
        if (err) { return next(err); }
    })
    hero2.save(function(err){
        if (err) { return next(err); }
    })
    hero3.save(function(err){
        if (err) { return next(err); }
    })
    
};