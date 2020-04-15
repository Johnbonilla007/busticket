import React, { useState } from 'react';
import styled from 'styled-components';
import {Combobox, TextFieldControl } from '../../../Controls';
import { Button } from '@material-ui/core';
import { restClient } from '../../../services/restClient';
import { utils } from '../../../utils';

const UnitTypeStyled = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 100px;
    width: 600px;
`;


const UnitTypeItem = ({ item, isEditing, fetchUnitTypes, url }) => {
    const [unitType, setUnitType] = useState(item);

    const handleChange = prop => value => {
        setUnitType({ ...unitType, [prop]: value });
    }

    const handleAddMotoristClick = async () => {
        let response;

        if (isEditing) {
            response = await restClient.httpPut(url, unitType);
        } else {
            response = await restClient.httpPost(url, unitType);
        }

        if (response === 'success' || utils.evaluateObject(response)) {
            fetchUnitTypes();
        }
    }

    return (
        <UnitTypeStyled>
            <Combobox options={[
                {key: 'economic', text: 'Económica'},
                {key: 'executive', text: 'Ejecutivo'},
                {key: 'firstClass', text: 'Primera Clase'}
            ]} 

                selectedKey={isEditing ? unitType.category : ''}
                onChange={handleChange('category')}
            />

            <TextFieldControl
                initialValue={isEditing ? unitType.description : ''}
                label="Descripción"
                onChange={handleChange('description')}
            />

            <TextFieldControl
                initialValue={isEditing ? unitType.state : ''}
                label="Estado"
                onChange={handleChange('state')}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleAddMotoristClick} >
                Add
            </Button>
        </UnitTypeStyled>
    )
}

export default UnitTypeItem;