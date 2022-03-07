import { makeStyles, withStyles } from "@material-ui/styles";
import { IconButton, Card } from "@material-ui/core";

export default makeStyles(theme => ({
  btnContainer: {
    display: 'flex',
    '& button:first-child': {
      marginRight: '8px'
    },
    '& button:nth-child(2)': {
      marginRight: '8px'
    }
  },
}));

export const CustomCard = withStyles((theme) => ({
  root: {
    '&>div': {
      height: '180px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,


      '&>div:first-child': {
        '&>h6': {
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '8px'
        },
        '&>p': {
          fontSize: '14px'
        },
      },
      '&>div:nth-child(2)': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '&>p': {
          fontSize: '14px'
        },
      }
    }
  },
}))(Card);

export const RoundDarkButton = withStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 100,
    padding: '4px',
    fontSize: '24px',
    '&:hover': {
      backgroundColor: '#777777',
    },
  },
}))(IconButton);
