import React from 'react';
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


const DepartmentsStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 360px);
    grid-row-gap: 10px;
    opacity: 80%;
`;

const departments = [
    {
        name: 'Atlántida',
        img: atlantida,
        description: 'Costa Norte del País'
    },
    {
        name: 'Yoro',
        img: yoro,
        description: 'En algunas ocaciones hay lluvias de peces, "Increible OOH"'
    },
    {
        name: 'Olancho',
        img: olancho,
        description: 'Es la mejor referencia para disfrutar del departamento más grande del país, sin duda es una aventura a lo grande'
    },
    {
        name: 'Cortes',
        img: cortes,
        description: 'Su cabecera departamental es San Pedro Sula. Su nombre deriva del conquistador Hernán Cortés.'
    },
    {
        name: 'Colón',
        img: colon,
        description: 'Cabecera Departamental: Trujillo, Actividades: Observación de aves, Pesca Deportiva, Paseo en Caballo, Montañismo, Senderismo, Paseo en Bicicleta, etc.'
    },
    {
        name: 'Santa Barbara',
        img: santaBarbara,
        description: 'La mayoria de la población se dedica a actividades agrícolas, crinaza de ganado vacuno y porcino, elaboración de artesanías hechas de palma y junco.'
    },
    {
        name: 'Copán',
        img: copan,
        description: 'Descubre un mundo milenario, lleno de historia y mucha cultura. ¡Te esperamos en Copán!'
    },
    {
        name: 'Comayagua',
        img: comayagua,
        description: 'El turismo se ve favorecido por la gastronomía, museos, calles empedradas e iglesias centenarias'
    },
]

const Departments = () => {

    return (
        <DepartmentsStyled>
            {departments.map(item => <DepartmentItem item={item} />)}
        </DepartmentsStyled>
    )
}

export default Departments;