import React from 'react';
import {
  Box,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Star, Edit, Delete } from '@material-ui/icons';
import moment from 'moment';

import useStyles, { RoundDarkButton, CustomCard } from "./note.style";

export function Note({ note, handleEdit, handleToggleStarred, handleDelete }) {
  var classes = useStyles();

  const { name, description, date, color} = note;
  return (
    <CustomCard style={{backgroundColor: color}}>
      <CardContent>
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
        <Box>
          <Typography variant="body2">{moment(date).format('MMMM DD, YYYY')}</Typography>
          <Box className={classes.btnContainer}>
            <RoundDarkButton variant="contained" classes={classes.darkButton} onClick={handleEdit}>
              <Edit fontSize="small"/>
            </RoundDarkButton>
            <RoundDarkButton variant="contained" classes={classes.darkButton} onClick={handleToggleStarred} style={{ color: note.starred ? 'yellow' : 'white'}}>
              <Star fontSize="small"/>
            </RoundDarkButton>
            <RoundDarkButton variant="contained" classes={classes.darkButton} onClick={handleDelete}>
              <Delete fontSize="small"/>
            </RoundDarkButton>
          </Box>
        </Box>
      </CardContent>
    </CustomCard>
  )
}