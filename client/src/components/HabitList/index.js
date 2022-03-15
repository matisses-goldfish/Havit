// TODO: change code based on models
import React from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const HabitList = ({

  habits,
  // name,
  // showName = true,
  // showUsername = true,
}) => {
  if (!habits.length) {
    return <h3>No habits have been created</h3>;
  }

  return (
    <div>
      {habits &&
        habits.map((habit) => (
          // TODO: would we want the type to be correlated with an icon?
          // TODO: adjust maxWidth
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {habit.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {habit.createdDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* TODO: Change based on models */}
          {habit.goalValue}
            {/* TODO: possible have it effect color??? */}
          </Typography>
          <FormControlLabel
          value="end"
          control={<Checkbox />}
        />
        </CardContent>
      </CardActionArea>
    </Card>
        ))}
    </div>
  );
};

export default HabitList;
