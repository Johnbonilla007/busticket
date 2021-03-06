import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalControl = ({open, onClose, children, width}) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
            {children}
        </div>
      </Modal>
    </div>
  );
}

export default ModalControl;