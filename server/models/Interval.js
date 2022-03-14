const mongoose = require('mongoose');

const { Schema } = mongoose;

const intervalSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Interval = mongoose.model('Category', intervalSchema);

module.exports = Interval;