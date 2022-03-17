import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(userName: $username, email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;


export const ADD_HABIT = gql`
  mutation addHabit($name: String!, $type: String, $endDate: Date!, $interval: String!, $goalValue: Number) {
    addHabit(name: $name, type: $type, interval: $interval, endDate: $endDate, goalValue: $goalValue) {
      habit {
          _id
      }
    }
  }
`;

export const UPDATE_HABIT = gql`
  mutation updateHabit($id: String!, $name: String!, $type: String, $endDate: Date!, $interval: String!, $user: ID!, $goalValue: Number) {
    updateHabit(id: $id, name: $name, type: $type, interval: $interval, endDate: $endDate, goalValue: $goalValue) {
      habit {
        _id
      }
    }
  }
`;