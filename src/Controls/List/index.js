import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import { RenderItem } from './components/ListItem';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListControl = ({items, onRender, onSelectedItemClick}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        {items.map((item, index) => <RenderItem index={index} item={item} onRender={onRender} onSelectedItemClick={onSelectedItemClick} />)}
      </List>
    </div>
  );
}

ListControl.propTypes = {
  items: PropTypes.array.isRequired,
  onRender: PropTypes.func.isRequired,
  onSelectedItemClick: PropTypes.func.isRequired,
}

export default ListControl;