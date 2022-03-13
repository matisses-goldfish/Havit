const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    // enteredDate: ????? Create scalar in schema
    user: User
    habit: Habit
    goalValue: Int
  }

  type Type {
    _id: ID
    name: 
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
    habits: [Habit]
    stats: [Stat]
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;