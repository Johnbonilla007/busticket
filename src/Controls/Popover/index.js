import React, {useEffect} from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

const PopoverControl = ({currentTarget, children}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
      setAnchorEl(currentTarget);
  }, [currentTarget]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {children}
      </Popover>
    </div>
  );
}

export default PopoverControl;