import React from 'react';
import styled from 'styled-components';
import Cards from '../controls/Cards';

const ContainerMainStyled = styled.div`
    position: fixed;
    top: 70px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    padding: 5px;

    /* background: blue; */
`;

export const ContainerMain = () => 
    <ContainerMainStyled> 
        <Cards items={[{title: 'Reservar'}, {title: 'Reservar'}, {title: 'Reservar'}, {title: 'Reservar'} ]} /> 
    </ContainerMainStyled>