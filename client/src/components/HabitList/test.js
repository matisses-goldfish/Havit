// TODO: change code based on models schems, typedefs and resolvers 
// import React from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CardActionArea } from '@mui/material';

// TODO: add loop that takes data from graphql / typedefs and iterates this info here

export default function Progress() {
  return (
      <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sleep
          </Typography>
          <Typography variant="body2" color="text.secondary">
            created: March 2 2022
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* TODO: Change based on models */}
            Master level
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
};
