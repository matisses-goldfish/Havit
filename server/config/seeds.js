const db = require('./connection');
const { User, Habit, Type, Interval } = require('../models');

db.once('open', async() => {
    await Type.deleteMany();

    const types = await Type.insertMany([
        { name: 'Healthy Living Habit'},
        { name: 'Financial Habit'},
        { name: 'Productivity Habit'},
        { name: 'Mindset Habit'},
        { name: 'Social Habit'}
    ]);

    console.log('categories seeded');

    await Habit.deleteMany();

    const habits = await Habit.insertMany([
        {
            name: 'Get at least 7 hours of sleep',
            type: types[0]._id,
        },
        {
            name: 'Practice yoga or exercise',
            type: types[0]._id,
        },
        {
            name: 'Track my expenses daily',
            type: types[1]._id,
        },
        {
            name: 'Make and maintain a To-Do list',
            type: types[2]._id,
        },
        {
            name: 'Write things I am thankful for',
            type: types[3]._id,
        },
        {
            name: 'Initiate a conversation or a social event',
            type: types[4]._id,
        }

    ]);

    console.log('habits seeded');

    await Interval.deleteMany();

    const intervals = await Type.insertMany([
        {
            name: 'Morning',
        },
        {
            name: 'Afternoon',
        },
        {
            name: 'Evening',
        },
        {
            name: 'Night',
        }

    ]);

    console.log('habits seeded');

    await User.deleteMany();

    await User.create({
        userName: 'PamelaW',
        email: 'pamela@test.com',
        password: 'password12345',
        habit: [
        {
            habits: [habits[0]._id, habits[1]._id, habits[4]._id]
        }
        ]
    });

    await User.create({
        userName: 'ElijahM',
        email: 'eholt@test.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();

});