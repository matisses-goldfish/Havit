// TODO: change habitAuthor
import React from 'react';
import { Link } from 'react-router-dom';

const HabitList = ({
  habits,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!habits.length) {
    return <h3>No habits have been created</h3>;
  }

  // TODO: Create Habit list styling and content
  return (
    <div>
      
    </div>
  );
};

export default HabitList;
