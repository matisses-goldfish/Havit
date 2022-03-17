import { gql } from '@apollo/client';

// TODO: Do we use this?
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

export const QUERY_HABITS = gql`
  query habits {
    habits {
        _id
        name
        type {
          _id 
          name
        }
        endDate
        interval {
          _id
          name}
    }
  }
`;

export const QUERY_SINGLE_HABIT = gql`
  query habit($habitId: String!) {
    habit(_id: $habitId) {
        _id
        name
        type {
          _id 
          name
        }
        endDate
        interval {
          _id
          name}
    }
  }
`;

export const QUERY_ACTIVE_HABITS = gql`
  query activeHabits() {
    habit {
        _id
        name
        type {
          _id 
          name
        }
        endDate
        interval {
          _id
          name}
    }
  }
`;

export const QUERY_STATS = gql`
  query stats ($habitId: String!) {
    stats(_id: $habitId) {
        enteredDate
        name
        user {
          _id 
          userName
        }
        value
    }
  }
`;

export const QUERY_TYPES = gql`
  query types {
    types {
        _id
        name
    }
  }
`;

export const QUERY_INTERVALS = gql`
  query intervals {
    intervals {
        _id
        name
    }
  }
`;