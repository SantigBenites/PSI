var Pet = require("../models/pet")

exports.pet_list = function(req, res, next) {

    Pet.find({}, 'name')
        .exec(function (err, pet_list) {
            if (err) { return next(err); }
            //Successful, so render
            res.send(pet_list);
        });

};

exports.pet_detail = function(req, res, next) {
    
    Pet.findById(req.params.id)
        .exec(function(err, pet){
            if (err) { return next(err); }
            res.send(pet)
        });

};


exports.serverInit = function() {

    Pet.deleteMany({},function(err,result){
        if (err) { return next(err); }
    })
    
    const Pet1 = new pet({name:"Pet1"})
    const Pet2 = new pet({name:"Pet2"})
    const Pet3 = new pet({name:"Pet3"})

    Pet1.save(function(err){
        if (err) { return next(err); }
    })
    Pet2.save(function(err){
        if (err) { return next(err); }
    })
    Pet3.save(function(err){
        if (err) { return next(err); }
    })
};