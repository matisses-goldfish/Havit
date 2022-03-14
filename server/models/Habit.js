const mongoose = require('mongoose');

const { Schema } = mongoose;

const habitSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Type',
    },
    endDate: {
        type: Date,
        required: true
    },
    interval: {
        type: Schema.Types.ObjectId,
        ref: 'Interval',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    goalValue: {
        type: Number,
        required:true
  }
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;