const mongoose = require('mongoose');

const { Schema } = mongoose;

const statSchema = new Schema({
  enteredDate: {
    type: Date,
    default: Date.now
  },
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  habit: {
    type: Schema.Types.ObjectId,
    ref: 'Habit'
  },
  goalValue: {
      type: Number,
      required:true
  }
});

const Stat = mongoose.model('Stat', statSchema);

module.exports = Stat;