import React from 'react';
import ListControl from '../../Controls/List';

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

const onRender = (item) => {
    return <span>{item.name}</span>
}

const Destinations = () => {

    return <div> <h1>Destinations</h1> <ListControl items={rows} onRender={onRender} /> </div>;
}

export default Destinations;