import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import {Alert} from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertNotification = ({content, open}) => {
  const classes = useStyles();
  return (
     <div className={classes.root} id="alert-notification">
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="success">
          {content}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </div>
  );
}

AlertNotification.defaultProps = {
  open: false,
}

export default AlertNotification;