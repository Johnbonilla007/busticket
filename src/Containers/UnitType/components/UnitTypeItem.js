import React, { useState } from 'react';
import styled from 'styled-components';
import { Combobox, TextFieldControl } from '../../../Controls';
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

    const handleAddUnitTypeClick = async () => {
        const response = await restClient.httpPost(url, { tipoUnidad: unitType });

        if (response === 'Success') {
            fetchUnitTypes();
        }
    }

    return (
        <UnitTypeStyled>
            <Combobox options={[
                { key: 'economic', text: 'Económica' },
                { key: 'executive', text: 'Ejecutivo' },
                { key: 'firstClass', text: 'Primera Clase' }
            ]}

                selectedKey={isEditing ? unitType.categoria : ''}
                onChange={handleChange('categoria')}
            />

            <TextFieldControl
                initialValue={isEditing ? unitType.descripcion : ''}
                label="Descripción"
                onChange={handleChange('descripcion')}
            />

            <TextFieldControl
                initialValue={isEditing ? unitType.estado : ''}
                label="Estado"
                onChange={handleChange('estado')}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleAddUnitTypeClick} >
                Add
            </Button>
        </UnitTypeStyled>
    )
}

export default UnitTypeItem;