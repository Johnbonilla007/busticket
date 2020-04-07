import React from 'react';
import styled from 'styled-components';
import Departments from './components/departments';

const DestinationsStyled = styled.div`
    position: relative;
`;

const Destinations = () => {

    return (
        <DestinationsStyled>
            <h2>Destinations Deparments</h2>
            <Departments />
        </DestinationsStyled>
    )
}

export default Destinations;