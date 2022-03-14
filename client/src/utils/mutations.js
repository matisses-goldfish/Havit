import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


// export const ADD_HABIT = gql`
//   mutation addHabit($name: String!, $type: String, $endDate: Date!, $interval: String!, $user: ID!, $goalValue: Number) {
//     addHabit(name: $name, type: $type, interval: $interval, endDate: $endDate, user:$user, goalValue: $goalValue) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const EDIT_HABIT = gql`
//   mutation editHabit($name: String!, $type: String, $endDate: Date!, $interval: String!, $user: ID!, $goalValue: Number) {
//     editHabit(name: $name, type: $type, interval: $interval, endDate: $endDate, user:$user, goalValue: $goalValue) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;