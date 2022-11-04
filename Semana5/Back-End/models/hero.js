var mongoose = require('mongoose');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HeroSchema = new Schema(
  {
    name: {type: String, required: true},
    Pet: {type: Schema.Types.ObjectId, required: false,ref:"Pet"}
  }
);

// Virtual for book's URL
HeroSchema
.virtual('url')
.get(function () {
  return '/hero/' + this._id;
});

//Export model
module.exports = mongoose.model('Hero', HeroSchema);