const mongoose = require('mongoose');

const { Schema } = mongoose;

const habitSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    // is it Healthy living, Financial, Productivity, 
    // Mindset or Social habit:
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Type',
    },
    createdDate: {
        type: Date
    },
    // the date by which the user wants to aquire the habit:
    endDate: {
        type: Date,
        required: true
    },
    // the time of the day when the user plans to practice the habit
    // morning, afternoon, evening, night
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
    // How much/long/many times? A quantitative value to measure progress
    // and build stats from. We can keep it down to a number first,
    // iterate on variance when we have a working app (MVP)
    goalValue: {
        type: Number,
        required:true
  }
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;