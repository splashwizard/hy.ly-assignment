import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box
} from '@material-ui/core';
import moment from 'moment';

export function CreateNoteContent({ handleClose, handleCreate }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [color, setColor] = useState('#66cc66');

  // const { name, description, date, color} = note;
  const handleCreateNote = () => {
    if(name && description && date && color)
      handleCreate({name, description, date, color});
  }

  return (
    <>
      <DialogTitle id="form-dialog-title">Create Note</DialogTitle>
      <DialogContent style={{minWidth: '400px'}}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Description"
          fullWidth
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Box style={{display: 'flex'}}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Date"
            type="date"
            fullWidth
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{marginRight: '8px'}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Color"
            type="color"
            fullWidth
            value={color}
            onChange={e => setColor(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCreateNote} color="primary">
          Create
        </Button>
      </DialogActions>
    </>
  )
}