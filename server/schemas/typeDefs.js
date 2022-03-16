const { gql } = require('apollo-server-express');

//TODO for stat enteredDate: ????? Create scalar in schema

const typeDefs = gql`
  scalar Date

  type Habit {
    _id: ID
    name: String
    type: Type
    endDate: Date
    interval: Interval
    user: User
    goalValue: Int
  }

  type Interval {
    _id: ID
    name: String
  }

  type Stat {
    user: User
    habit: Habit
    value: Int
  }

  type Type {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    userName: String
    email: String
    password: String
  }

  type Login {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    habit(_id: String): Habit
    habits: [Habit]
    activeHabits: [Habit]
    stats(_id: String): [Stat]
    types: [Type]
    intervals: [Interval]
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addHabit(name: String, type: String, endDate: Date, interval: String, goalValue: Int): Habit
    updateHabit(id: String!, name: String!, type: Type, interval: Interval, endDate: Date, goalValue: Int): Habit
  }

`;

module.exports = typeDefs;