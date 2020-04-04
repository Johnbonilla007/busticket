import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';

const TableHeader = ({classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells}) => {
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };
    
    return (
      <TableHead>
        <TableRow>
          {headCells.map(headCell => (
            <TableCell
              key={headCell.id}
              align="left"
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >

            {headCell.onRenderHeader ? headCell.onRenderHeader() : null}

              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  TableHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  export default TableHeader;