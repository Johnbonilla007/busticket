import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export const RenderItem = ({index, item, onRender, onSelectedItemClick}) => {
  debugger
    return (
      <ListItem button key={index} onClick={onSelectedItemClick}>
        {onRender(item)}
      </ListItem>
    );
  }
  
RenderItem.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
    onRender: PropTypes.func,
    onSelectedItemClick: PropTypes.func.isRequired,
  };

