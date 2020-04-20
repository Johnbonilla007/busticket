import React, { useState } from 'react';
import styled from 'styled-components';
import { TextFieldControl } from '../../../Controls';
import { Button } from '@material-ui/core';
import { restClient } from '../../../services/restClient';
import { utils } from '../../../utils';

const TransportationUnitItemStyled = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 100px 100px 100px 100px;
    width: 600px;
`;


const TransportationUnitItem = ({ item, isEditing, fetchTransportationUnits, url }) => {
    const [transportationUnits, setTransportationUnits] = useState(item);

    const handleChange = prop => value => {
        setTransportationUnits({ ...transportationUnits, [prop]: value });
    }

    const handleAddTransportationUnitClick = async () => {
        const response = await restClient.httpPost(url, {
            unidadTransporte: transportationUnits
        });

        if (response.mensaje === 'Success') {
            fetchTransportationUnits();
        }
    }

    return (
        <TransportationUnitItemStyled>
            <TextFieldControl
                initialValue={isEditing ? transportationUnits.conductorId : ''}
                label="Conductor Id"
                onChange={handleChange('conductorId')}
            />

            <TextFieldControl
                initialValue={isEditing ? transportationUnits.tipoUnidadId : ''}
                label="Tipo Unidad Id"
                onChange={handleChange('tipoUnidadId')}
            />

            <TextFieldControl
                initialValue={isEditing ? transportationUnits.unidadTransporteNo : ''}
                label="Unidad Transporte No"
                onChange={handleChange('unidadTransporteNo')}
            />

            <TextFieldControl
                initialValue={isEditing ? transportationUnits.capacidad : ''}
                label="Capacidad"
                onChange={handleChange('capacidad')}
            />

            <TextFieldControl
                initialValue={isEditing ? transportationUnits.capacidadPorFilaUnidadTransporte : ''}
                label="Capacidad Fila"
                onChange={handleChange('capacidadPorFilaUnidadTransporte')}
            />

            <TextFieldControl
                initialValue={isEditing ? transportationUnits.asientosDisponibles : ''}
                label="Asientos Disponibles"
                onChange={handleChange('asientosDisponibles')}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleAddTransportationUnitClick} >
                Add
            </Button>
        </TransportationUnitItemStyled>
    )
}

export default TransportationUnitItem;