import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { TableControl } from '../../controls';

const onRenderCell = row => {
    return <Checkbox />
}

const headCells = [
    { id: 'checked', onRenderHeader: () => <Checkbox />, onRenderCell: onRenderCell, label: "" },
    { id: 'name', numeric: false, disablePadding: true, label: 'Nombre' },
    { id: 'lastName', numeric: false, disablePadding: false, label: 'Apellido' },
    { id: 'age', numeric: true, disablePadding: false, label: 'Edad' },
    { id: 'color', numeric: true, disablePadding: false, label: 'Color' },
  ];
  
  const rows = [
    {
        name: 'Erlin',
        lastName: "Banegas",
        age: 24,
        color: 'white',
    },
    {
        name: 'Albert',
        lastName: "Einstein",
        age: 21,
        color: 'white'
    },
    {
        name: 'Isacc',
        lastName: "Newton",
        age: 26,
        color: 'black'
    },
    {
        name: 'José',
        lastName: "Platón",
        age: 27,
        color: 'white'
    }
  ];

const Schedule = () => {
    return <div>
        <h1>Schedule</h1>
        <TableControl fieldKey="name" columns={headCells} rows={rows} />
        </div>
}


export default Schedule;