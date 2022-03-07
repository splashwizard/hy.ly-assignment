import React from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText
} from '@material-ui/core';

export function DeleteNoteContent({ handleClose, handleDelete }) {

  return (
    <>
      <DialogTitle id="alert-dialog-title">Delete Note</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this note?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          No
        </Button>
        <Button onClick={handleDelete} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </>
  )
}