import React from 'react';
// import { Counter } from './features/counter/Counter';
import { useSelector, useDispatch } from 'react-redux';

import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  Dialog
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

import useStyles, { DarkButton, RoundDarkButton } from "./App.style";
import { Note } from './components/note/note';
import {
  create,
  edit,
  remove,
  toggleStarred,
  selectNote,
  selectStaredNote
} from './components/note/noteSlice';

import { CreateNoteContent } from './components/modal/createNote';
import { EditNoteContent } from './components/modal/editNote';
import { DeleteNoteContent } from './components/modal/deleteNote';

// const notes = [
//   {name: 'Working', description: 'Fine', date: 'Jan 01, 2022', color: '#66cc66'},
//   {name: 'Assigment', description: 'Fine', date: 'Jan 01, 2022', color: '#6666cc'},
//   {name: 'Working', description: 'Fine', date: 'Jan 01, 2022', color: '#66cc66'},
//   {name: 'Assigment', description: 'Fine', date: 'Jan 01, 2022', color: '#6666cc'},
//   {name: 'Working', description: 'Fine', date: 'Jan 01, 2022', color: '#66cc66'},
// ]

function App() {
  const notes = useSelector(selectNote);
  const startedNotes = useSelector(selectStaredNote);
  const dispatch = useDispatch();

  const [openCreateNote, setOpenCreateNote] = React.useState(false);
  const [openEditNote, setOpenEditNote] = React.useState(false);
  const [openDeleteNote, setOpenDeleteNote] = React.useState(false);
  const [editNote, setEditNote] = React.useState(null);
  const [deleteNoteId, setDeleteNoteId] = React.useState(null);
  const [mode, setMode] = React.useState('all');
  var classes = useStyles();

  const handleOpenCreateNote = () => {
    setOpenCreateNote(true);
  };

  const handleOpenEditNote = (note) => {
    setEditNote(note);
    setOpenEditNote(true);
  };

  const handleOpenDeleteNote = (noteId) => {
    setDeleteNoteId(noteId);
    setOpenDeleteNote(true);
  };

  const handleCloseCreateNote = () => {
    setOpenCreateNote(false);
  };

  const handleCloseEditNote = () => {
    setOpenEditNote(false);
  };

  const handleCloseDeleteNote = () => {
    setOpenDeleteNote(false);
  };

  const handleCreateNote = (payload) => {
    dispatch(create(payload));
    setOpenCreateNote(false);
  };

  const handleEditNote = (payload) => {
    dispatch(edit({
      id: editNote.id, 
      note: payload
    }));
    setOpenEditNote(false);
  };

  const handleDeleteNote = () => {
    dispatch(remove({ id: deleteNoteId }));
    setOpenDeleteNote(false);
  };

  const handleToggleStarred = (id) => {
    dispatch(toggleStarred({ id }));
  };

  const showNotes = mode === 'all' ? notes : startedNotes;

  return (
    <Container maxWidth="lg" className={classes.body}>
      <Box className={classes.topWrapper}>
        <Box className={classes.notesContainer}>
          <Typography variant="h5">Notes</Typography>
          <RoundDarkButton aria-label="create" classes={classes.roundDarkButton} onClick={handleOpenCreateNote}>
            <AddIcon />
          </RoundDarkButton>
        </Box>
        <Box className={classes.btnContainer}>
          { mode === 'all' ? (
            <>
              <DarkButton variant="contained" classes={classes.darkButton} onClick={() => setMode('all')}>All</DarkButton>
              <Button variant="contained" style={{fontSize: '12px', textTransform: 'none'}} onClick={() => setMode('shared')}>Only Stared</Button>
            </>
          ) : (
            <>
              <Button variant="contained" style={{fontSize: '12px', textTransform: 'none'}} onClick={() => setMode('all')}>All</Button>
              <DarkButton variant="contained" classes={classes.darkButton} onClick={() => setMode('shared')}>Only Stared</DarkButton>
            </>
          )}
        </Box>
      </Box>
      <Grid container spacing={3} className={classes.gridContainer}>
        {
          showNotes.map((note, noteIdx) => (
            <Grid item xs={3} key={noteIdx}>
              <Note
                note={note}
                handleEdit={() => handleOpenEditNote(note)}
                handleToggleStarred={() => handleToggleStarred(note.id)}
                handleDelete={() => handleOpenDeleteNote(note.id)}
              />
            </Grid>
          ))
        }
      </Grid>
      <Dialog open={openCreateNote} onClose={handleCloseCreateNote} aria-labelledby="form-dialog-title">
        <CreateNoteContent handleClose={handleCloseCreateNote} handleCreate={handleCreateNote}/>
      </Dialog>
      <Dialog open={openEditNote} onClose={handleCloseEditNote} aria-labelledby="form-dialog-title">
        <EditNoteContent note={editNote} handleClose={handleCloseEditNote} handleEdit={handleEditNote}/>
      </Dialog>
      <Dialog open={openDeleteNote} onClose={handleCloseDeleteNote} aria-labelledby="form-dialog-title">
        <DeleteNoteContent handleClose={handleCloseDeleteNote} handleDelete={handleDeleteNote}/>
      </Dialog>
    </Container>
  );
}

export default App;
