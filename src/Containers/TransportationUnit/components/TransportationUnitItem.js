import React, {useState} from 'react';
import styled from 'styled-components';
import {TextFieldControl} from '../../../Controls';
import {Button} from '@material-ui/core';
import { restClient } from '../../../services/restClient';
import { utils } from '../../../utils';

const TransportationUnitItemStyled = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 100px 100px 100px 100px;
    width: 600px;
`;


const TransportationUnitItem = ({item, isEditing, fetchTransportationUnits, url}) => {
    const [unitType, setUnitType] = useState(item);

    const handleChange = prop => value => {
        setUnitType({...unitType, [prop]: value});
    }

    const handleAddTransportationUnitClick = async () => {
        let response;

        if(isEditing){
            response = await restClient.httpPut(url, unitType);
        }else{
            response = await restClient.httpPost(url, unitType);
        }

        if(response === 'success' || utils.evaluateObject(response)){
            fetchTransportationUnits();
        }
    }

    return (
        <TransportationUnitItemStyled>
            <TextFieldControl 
                initialValue={isEditing ? unitType.name : ''} 
                label="Conductor Id" 
                onChange={handleChange('motoristId')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? unitType.identity : ''} 
                label="Tipo Unidad Id" 
                onChange={handleChange('unitTypeId')} 
            />
            
            <TextFieldControl 
                initialValue={isEditing ? unitType.age : ''} 
                label="Unidad Transporte No" 
                onChange={handleChange('transportationUnitNo')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? unitType.genero : ''} 
                label="Capacidad" 
                onChange={handleChange('capacity')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? unitType.phone : ''} 
                label="Capacidad Fila" 
                onChange={handleChange('capacityRow')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? unitType.phone : ''} 
                label="Asientos Disponibles" 
                onChange={handleChange('availableSeats')} 
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