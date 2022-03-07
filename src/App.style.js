import { makeStyles, withStyles } from "@material-ui/styles";
import { Button, IconButton } from "@material-ui/core";

export default makeStyles(theme => ({
  body: {
    padding: "16px"
  },
  topWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  notesContainer: {
    display: 'flex',
    alignItems: 'center',
    '& h5': {
      paddingRight: '8px'
    }
  },
  btnContainer: {
    display: 'flex',
    '& button:first-child': {
      marginRight: '8px'
    }
  },
  gridContainer: {
    marginTop: '16px'
  }
}));

export const DarkButton = withStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '12px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#777777',
    },
  },
}))(Button);

export const RoundDarkButton = withStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '12px',
    borderRadius: 100,
    padding: '4px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#aaaaaa',
    },
  },
}))(IconButton);