const db = require('../config/connection');
const { User, Habit, Type, Interval, Stat } = require('../models');

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

    console.log('interval seeded');

    await User.deleteMany();

    const user1 = await User.create({
        userName: 'PamelaW',
        email: 'pamela@test.com',
        password: 'password12345'
    });

    const user2 = await User.create({
        userName: 'ElijahM',
        email: 'eholt@test.com',
        password: 'password12345'
    });

    console.log('users seeded');

    await Habit.deleteMany();

    const habits = await Habit.insertMany([
        {
            name: 'Get at least 7 hours of sleep',
            type: types[0]._id,
            endDate: new Date(2022, 4, 20),
            goalValue: 7,
            user: user1,
            interval: intervals[0]
        },
        {
            name: 'Practice yoga or exercise',
            type: types[0]._id,
            endDate: new Date(2022, 5, 15),
            goalValue: 20,
            user: user1,
            interval: intervals[1]

        },
        {
            name: 'Track my expenses daily',
            type: types[1]._id,
            endDate: new Date(2022, 4, 18),
            goalValue: 1,
            user: user2,
            interval: intervals[0]
        },
        {
            name: 'Make and maintain a To-Do list',
            type: types[2]._id,
            endDate: new Date(2022, 4, 18),
            goalValue: 1,
            user: user2,
            interval: intervals[2]

        },
        {
            name: 'Write things I am thankful for',
            type: types[3]._id,
            endDate: new Date(2022, 4, 01),
            goalValue: 3,
            user: user2,
            interval: intervals[0]
        },
        {
            name: 'Initiate a conversation or a social event',
            type: types[4]._id,
            endDate: new Date(2022, 4, 01),
            goalValue: 1,
            user: user1,
            interval: intervals[2]
        }

    ]);

    console.log('habits seeded');

    await Stat.deleteMany();

    const stats = await Stat.insertMany([
        {
            enteredDate: new Date(2022, 3, 01),
            user: user1,
            habit: habits[0]._id,
            value: 8
        },
        // stats for Practice yoga or exercise; 
        // goalValue is 20 and exceeded for some dates
        {
            enteredDate: new Date(2022, 2, 10),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 2, 12),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 2, 13),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 2, 14),
            user: user1,
            habit: habits[1]._id,
            value: 10
        },
        {
            enteredDate: new Date(2022, 2, 15),
            user: user1,
            habit: habits[1]._id,
            value: 0
        },
        {
            enteredDate: new Date(2022, 2, 16),
            user: user1,
            habit: habits[1]._id,
            value: 0
        },
        {
            enteredDate: new Date(2022, 2, 17),
            user: user1,
            habit: habits[1]._id,
            value: 0
        },
        {
            enteredDate: new Date(2022, 2, 18),
            user: user1,
            habit: habits[1]._id,
            value: 10
        },
        {
            enteredDate: new Date(2022, 2, 19),
            user: user1,
            habit: habits[1]._id,
            value: 10
        },
        {
            enteredDate: new Date(2022, 2, 20),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 2, 21),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 2, 22),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 2, 23),
            user: user1,
            habit: habits[1]._id,
            value: 25
        },
        {
            enteredDate: new Date(2022, 2, 24),
            user: user1,
            habit: habits[1]._id,
            value: 25
        },
        {
            enteredDate: new Date(2022, 2, 25),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 2, 26),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 2, 27),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 2, 28),
            user: user1,
            habit: habits[1]._id,
            value: 30
        },
        {
            enteredDate: new Date(2022, 3, 01),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 3, 02),
            user: user1,
            habit: habits[1]._id,
            value: 0
        },
        {
            enteredDate: new Date(2022, 3, 03),
            user: user1,
            habit: habits[1]._id,
            value: 10
        },
        {
            enteredDate: new Date(2022, 3, 04),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 3, 05),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 3, 06),
            user: user1,
            habit: habits[1]._id,
            value: 10
        },
        {
            enteredDate: new Date(2022, 3, 07),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 3, 08),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 3, 09),
            user: user1,
            habit: habits[1]._id,
            value: 20
        },
        {
            enteredDate: new Date(2022, 3, 10),
            user: user1,
            habit: habits[1]._id,
            value: 10
        },
        {
            enteredDate: new Date(2022, 3, 11),
            user: user1,
            habit: habits[1]._id,
            value: 10
        },
        {
            enteredDate: new Date(2022, 3, 12),
            user: user1,
            habit: habits[1]._id,
            value: 0
        },
        {
            enteredDate: new Date(2022, 3, 13),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 3, 14),
            user: user1,
            habit: habits[1]._id,
            value: 15
        },
        {
            enteredDate: new Date(2022, 3, 15),
            user: user1,
            habit: habits[1]._id,
            value: 20
        },
        {
            enteredDate: new Date(2022, 3, 16),
            user: user1,
            habit: habits[1]._id,
            value: 20
        },
        // other habits
        {
            enteredDate: new Date(2022, 2, 20),
            user: user2,
            habit: habits[3]._id,
            value: 1
        },
        {
            enteredDate: new Date(2022, 3, 01),
            user: user2,
            habit: habits[4]._id,
            value: 2
        }
    ]);

    console.log('stats seeded');

    process.exit();

});