import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box
} from '@material-ui/core';

export function EditNoteContent({ note, handleClose, handleEdit }) {
  const [name, setName] = useState(note.name);
  const [description, setDescription] = useState(note.description);
  const [date, setDate] = useState(note.date);
  const [color, setColor] = useState(note.color);

  const handleEditNote = () => {
    if(name && description && date && color)
      handleEdit({name, description, date, color});
  }

  return (
    <>
      <DialogTitle id="form-dialog-title">Edit Note</DialogTitle>
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
        <Button onClick={handleEditNote} color="primary">
          Update
        </Button>
      </DialogActions>
    </>
  )
}