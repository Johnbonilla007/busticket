import React from 'react';
import PropTypes from 'prop-types';

import {Drawer, Button} from '@material-ui/core';

const PanelControl = ({anchor, title, label, children}) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment key={anchor}>
        <Button variant="contained" color="primary" onClick={toggleDrawer(anchor, true)}>{label}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            <div style={{display: 'grid', justifyContent: 'center'}}><h1>{title}</h1></div>
            {children}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

PanelControl.propTypes = {
    anchor: 'left' || 'right' || 'top' || 'bottom',
}

export default PanelControl;