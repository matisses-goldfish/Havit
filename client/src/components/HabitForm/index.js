// TODO: change habitAuthor
// TODO: double check components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_HABIT } from '../../utils/mutations';
import { QUERY_HABITS } from '../../utils/queries';

import Auth from '../../utils/auth';

const HabitForm = () => {
  const [habitName, setHabitName] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addHabit, { error }] = useMutation(ADD_HABIT, {
    update(cache, { data: { addHabit } }) {
      try {
        const { habits } = cache.readQuery({ query: QUERY_HABITS });

        cache.writeQuery({
          query: QUERY_HABITS,
          data: { habits: [addHabit, ...habits] },
        });
      } catch (e) {
        console.error(e);
      }

      // update users object's cache
      const { user } = cache.readQuery({ query: QUERY_USER });
      cache.writeQuery({
        query: QUERY_USER,
        data: { user: { ...user, habits: [...user.habits, addHabit] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addHabit({
        variables: {
          habitName,
          habitAuthor: Auth.getProfile().data.username,
        },
      });

      setHabitName('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'habitName' && value.length <= 280) {
      setHabitName(value);
      setCharacterCount(value.length);
    }
  };
// TODO: Create form with habit input feilds and materal styling
  return (
    <div>
      
    </div>
  );
};

export default HabitForm;
