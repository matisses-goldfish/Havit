// TODO: change code based on models schems, typedefs and resolvers 
// import React from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CardActionArea } from '@mui/material';

import { useQuery } from '@apollo/client';
// TODO: add loop that takes data from graphql / typedefs and iterates this info here

const HabitList = () => {

  const userData = data?.user || {};

  return (
    <div>
      {userData.habits?.map((habit) => {
        return (
          // TODO: would we want the type to be correlated with an icon?
          // TODO: adjust maxWidth
      <Card>
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
    
    );
  })}    
  </div>
  );
};

export default HabitList;
