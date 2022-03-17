const { AuthenticationError } = require('apollo-server-express');
const { User, Habit, Type, Interval, Stat } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // get All Habits
        habits: async () => {
            return Habit.find({}).populate('type').populate('interval');
        },

        // find habit by id
        habit: async (parent, { _id }) => {
            return Habit.findById(_id).populate('type').populate('interval');
        },

        // find active habits (where endDate > current date) 
        activeHabits: async () => {
            return Habit.find({
                endDate: {
                    $gte: new Date('May 15, 2022'),
                }
            }).populate('type').populate('interval');
        },

        // getStats
        stats: async (parent, { _id }, context) => {
            // if (context.user) {
            //     return await Stat.find({ 
            //         user: context.user
            //     });
            // }
            // throw new AuthenticationError('Not logged in');
            return await Stat.find({ 
                habit: {
                    _id
                }
            }).populate('user');
          },
        // getTypes
        types: async (parent) => {
            return await Type.find({});
          },
        // getIntervals
        intervals: async (parent) => {
            return await Interval.find({});
          }
    },
    Mutation: {
        
        // add new user
        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        },
         // user log in
         login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            
            const token = signToken(user);

            return { token, user };
        },
        // // update User
        // updateUser: async (parent, args, context) => {
        //   if (context.user) {
        //     return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        //   }
    
        //   throw new AuthenticationError('Not logged in');
        // },

        // addHabit({name, type, interval,end)}
        addHabit: async (parent, { name, type, interval, endDate, goalValue }, context) => {
          if (context.user) {
            const _habit = new Habit({ name, type, interval, endDate, goalValue });
    
            await User.findByIdAndUpdate(context.user._id, { $push: { habits: _habit } });
    
            return _habit;
          }
    
          throw new AuthenticationError('Not logged in');
        },

        // storeStats([{habit_id},{value}])

        // edit habit - updateHabit(habit_id, name, typeid, intervalid, end.date)
        updateHabit: async (parent, { id, name, type, interval, endDate, goalValue }) => {
            return Habbit.update({_id: id}, {name, type, interval, endDate, goalValue});
        }
      }
    };

module.exports = resolvers;