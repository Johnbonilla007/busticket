import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';


import { useToolbarStyles } from '../style';

const TableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle">
            Nutrition
          </Typography>
        )}
      </Toolbar>
    );
  };
  
  TableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  export default TableToolbar;