import React, { useState } from 'react';
import styled from 'styled-components';
import { TextFieldControl } from '../../../Controls';
import { Button } from '@material-ui/core';
import { restClient } from '../../../services/restClient';
import { utils } from '../../../utils';

const DestinationItemStyled = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 100px;
    width: 600px;
`;


const DestinationItem = ({ url, item, isEditing, fetchDestinarions }) => {
    const [destination, setDestination] = useState(item);

    const handleChange = prop => value => {
        setDestination({ ...destination, [prop]: value });
    }

    const handleAddDestinationClick = async () => {
        let response;

        const request = {
            destino: destination
        }

        if (isEditing) {
            response = await restClient.httpPost(url, request);
        } else {
            response = await restClient.httpPost(url, request);
        }

        if (response.mensaje === 'Success') {
            fetchDestinarions();
        }
    }

    return (
        <DestinationItemStyled>
            <TextFieldControl
                initialValue={isEditing ? destination.nombreDestino : ''}
                label="Origen"
                onChange={handleChange('nombreDestino')}
            />

            <TextFieldControl
                initialValue={isEditing ? destination.departamentoDestino : ''}
                label="Destination Department"
                onChange={handleChange('departamentoDestino')}
            />

            <TextFieldControl
                initialValue={isEditing ? destination.ciudadDestino : ''}
                label="Destination City"
                onChange={handleChange('ciudadDestino')}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleAddDestinationClick} >
                Add
            </Button>
        </DestinationItemStyled>
    )
}

export default DestinationItem;