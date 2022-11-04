var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PetSchema = new Schema(
  {
    name: {type: String, required: true}
  }
);

// Virtual for book's URL
PetSchema
.virtual('url')
.get(function () {
  return '/pet/' + this._id;
});

//Export model
module.exports = mongoose.model('Pet', PetSchema);