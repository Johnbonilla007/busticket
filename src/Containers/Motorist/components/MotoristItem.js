import React, { useState } from 'react';
import styled from 'styled-components';
import { TextFieldControl } from '../../../Controls';
import { Button } from '@material-ui/core';
import { restClient } from '../../../services/restClient';
import { utils } from '../../../utils';

const UnitTypeItemStyled = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 100px 100px 100px;
    width: 600px;

    @media screen and (max-width: 992px) {
        width: 500px;
    }

    @media screen and (max-width: 700px) {
        width: 400px;
    }

    @media screen and (max-width: 600px) {
        width: 300px;
    }
`;


const MotoristItem = ({ item, isEditing, fetchMotorists, url }) => {
    const [motorist, setMotorist] = useState(item);

    const handleChange = prop => value => {
        setMotorist({ ...motorist, [prop]: value });
    }

    const handleAddMotoristClick = async () => {

        if (!utils.evaluateObject(motorist)) {
            return;
        }

        let response;

        if (isEditing) {
            response = await restClient.httpPut(url, motorist);
        } else {
            response = await restClient.httpPost(url, { conductor: motorist });
        }

        if (response.mensaje === 'Success' || utils.evaluateObject(response)) {
            fetchMotorists();
        }
    }

    return (
        <UnitTypeItemStyled>
            <TextFieldControl
                initialValue={isEditing ? motorist.nombre : ''}
                label="Nombre Condutor"
                onChange={handleChange('nombre')}
            />

            <TextFieldControl
                initialValue={isEditing ? motorist.identidad : ''}
                label="Identidad"
                onChange={handleChange('identidad')}
            />

            <TextFieldControl
                initialValue={isEditing ? motorist.edad : ''}
                label="Edad"
                onChange={handleChange('edad')}
            />

            <TextFieldControl
                initialValue={isEditing ? motorist.genero : ''}
                label="genero"
                onChange={handleChange('genero')}
            />

            <TextFieldControl
                initialValue={isEditing ? motorist.telefono : ''}
                label="Telefono"
                onChange={handleChange('telefono')}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleAddMotoristClick} >
                Add
            </Button>
        </UnitTypeItemStyled>
    )
}

export default MotoristItem;