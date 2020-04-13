import React, {useState} from 'react';
import styled from 'styled-components';
import {TextFieldControl} from '../../../Controls';
import {Button} from '@material-ui/core';
import { restClient } from '../../../services/restClient';

const DestinationItemStyled = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 100px;
    width: 600px;
`;


const DestinationItem = ({item}) => {
    const [destination, setDestination] = useState(item);

    const handleChange = prop => value => {
        setDestination({...destination, [prop]: value});
    }

    const handleAddDestinationClick = async () => {
        const response = await restClient.httpPost('destinations', destination);
    }

    return (
        <DestinationItemStyled>
            <TextFieldControl label="Origen" onChange={handleChange('name')} />
            <TextFieldControl label="Destination Department" onChange={handleChange('destinationDepartment')} />
            <TextFieldControl label="Destination City" onChange={handleChange('destinationCity')} />

            <Button variant="contained" color="primary" onClick={handleAddDestinationClick} >Add</Button>
        </DestinationItemStyled>
    )
}

export default DestinationItem;