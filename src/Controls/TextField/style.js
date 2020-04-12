
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useTextFieldStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',

    '& .MuiTextField-root': {

      '& .MuiFormLabel-root': {
        color: 'white',
      },

      '& .MuiInput-root': {
        color: 'white',
      },

      '& .MuiInput-underline:before': {
        borderColor: 'white',
      },
    },

    // '& label.Mui-focused': {
    //   color: 'green',
    // },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'green',
    // },
    // '& .MuiOutlinedInput-root': {
      // '& fieldset': {
      //   borderColor: 'red',
      // },
      
      // '&:hover fieldset': {
      //   borderColor: 'yellow',
      // },

      // '&.Mui-focused fieldset': {
      //   borderColor: 'green',
      // },
    // },
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
}));


export {
    useTextFieldStyles,
};