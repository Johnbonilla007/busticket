import React, {useState} from 'react';
import styled from 'styled-components';
import DepartmentItem from './DepartmentItem';

import atlantida from './atlantida.jpg';
import yoro from './yoro.jpg';
import olancho from './olancho.png';
import cortes from './cortes.jpg';
import colon from './colon.jpg';
import santaBarbara from './santaBarbara.jpg';
import copan from './copan.jpg';
import comayagua from './comayagua.jpg';

import {ModalControl} from '../../../../Controls';
import { utils } from '../../../../utils';
import DestinationItem from './DestinationItem';


import bus1 from './buses/bus-1.jpg';
import bus2 from './buses/bus-2.jpg';
import Typography from '@material-ui/core/Typography';


const DepartmentsStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 360px);
    grid-row-gap: 10px;
    opacity: 90%;

    overflow: auto;
`;

const DestinationsDetailStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 360px);
    grid-row-gap: 10px;
    opacity: 90%;

    width: 730px;

    overflow: auto;
    `

const departments = [
    {
        name: 'Atlántida',
        img: atlantida,
        description: 'Costa Norte del País',
        destinations: [{
            origen: 'Central Metropolitana',
            destination: 'La Ceiba',
            output: '2:00 PM',
            final: '5:00 PM',
            transport: 'A-31',
            capacity: 52,
            available: 10,
            bus: bus1,
        },
        {
            origen: 'Central Metropolitana',
            destination: 'San Juan Pueblo',
            transport: 'A-31',
            output: '3:00 PM',
            final: '5:00 PM',
            capacity: 52,
            available: 10,
            bus: bus2,
        },
        {
            origen: 'Central Metropolitana',
            destination: 'Tela',
            output: '2:00 PM',
            final: '3:30 PM',
            transport: 'A-31',
            capacity: 52,
            available: 10,
            bus: bus1,
        }
    ],
    },
    {
        name: 'Yoro',
        img: yoro,
        description: 'En algunas ocaciones hay lluvias de peces, "Increible OOH"',
        destinations: [{
            origen: 'Progreso',
            destination: 'La Ceiba',
            output: '2:00 PM',
            final: '4:30 PM',
            transport: 'A-31',
            capacity: 52,
            available: 10,
            bus: bus2,
        }],
    },
    {
        name: 'Olancho',
        img: olancho,
        description: 'Es la mejor referencia para disfrutar del departamento más grande del país, sin duda es una aventura a lo grande',
        destinations: [{
            origen: 'Olancho',
            destination: 'Olanchito',
            output: '2:00 PM',
            final: '3:30 PM',
            transport: 'A-31',
            capacity: 52,
            available: 10,
            bus: bus1,
        }],
    },
    {
        name: 'Cortes',
        img: cortes,
        description: 'Su cabecera departamental es San Pedro Sula. Su nombre deriva del conquistador Hernán Cortés.',
        destinations: [{
            origen: 'Central Metropolitana',
            destination: 'Choloma',
            output: '2:00 PM',
            final: '3:30 PM',
            transport: 'A-31',
            capacity: 52,
            available: 10,
            bus: bus1,
        }],
    },
    {
        name: 'Colón',
        img: colon,
        description: 'Cabecera Departamental: Trujillo, Actividades: Observación de aves, Pesca Deportiva, Paseo en Caballo, Montañismo, Senderismo, Paseo en Bicicleta, etc.',
        destinations: [{
            origen: 'Colón',
            destination: 'Concito',
            output: '2:00 PM',
            final: '3:30 PM',
            transport: 'A-31',
            capacity: 52,
            available: 10,
            bus: bus1,
        }],
    },
    {
        name: 'Santa Barbara',
        img: santaBarbara,
        description: 'La mayoria de la población se dedica a actividades agrícolas, crinaza de ganado vacuno y porcino, elaboración de artesanías hechas de palma y junco.',
        destinations: [{
            origen: 'Central Metropolitana',
            destination: 'San Marcos',
            output: '2:00 PM',
            final: '3:30 PM',
            transport: 'A-31',
            capacity: 52,
            available: 10,
            bus: bus1,
        }],
    },
    {
        name: 'Copán',
        img: copan,
        description: 'Descubre un mundo milenario, lleno de historia y mucha cultura. ¡Te esperamos en Copán!',
        destinations: [{
            origen: 'Central Metropolitana',
            destination: 'Ruinas',
            output: '2:00 PM',
            final: '3:30 PM',
            transport: 'A-31',
            capacity: 52,
            available: 10,
            bus: bus1,
        }],
    },
    {
        name: 'Comayagua',
        img: comayagua,
        description: 'El turismo se ve favorecido por la gastronomía, museos, calles empedradas e iglesias centenarias',
        destinations: [{
            origen: 'Central Metropolitana',
            destination: 'Tegucigalpa',
            output: '2:00 PM',
            final: '3:30 PM',
            transport: 'A-31',
            capacity: 52,
            available: 10,
            bus: bus1,
        }],
    },
]

const Departments = () => {
    const [selectedItem, setSelectedItem] = useState({});

    const handleClick = (item) => {
        setSelectedItem(item);
    }

    const open = utils.evaluateObject(selectedItem) || false;

    return (
        <DepartmentsStyled>
            {departments.map(item => <DepartmentItem item={item} onClick={handleClick} />)}

            {open && 
            <ModalControl open={open} onClose={() => handleClick(null)}>
                <Typography gutterBottom variant="h5" component="h2">
                    {selectedItem.name}
                </Typography>
                <DestinationsDetailStyled>
                    {
                        selectedItem.destinations.map(destination => 
                        <DestinationItem item={destination} onClick={handleClick} />)
                    }
                </DestinationsDetailStyled>
            </ModalControl>}
        </DepartmentsStyled>
    )
}

export default Departments;