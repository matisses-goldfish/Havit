import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      habits {
        _id
        name
        endDate
        interval
      }
    }
  }
`;

export const QUERY_HABIT = gql`
  query gethabits {
    habits {
        _id
        name
        endDate
        interval
    }
  }
`;

export const QUERY_SINGLE_HABIT = gql`
  query getSingleHabit($habitId: ID!) {
    habit(habitId: $habitId) {
        _id
        name
        endDate
        interval
    }
  }
`;