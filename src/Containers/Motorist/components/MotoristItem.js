import React, {useState} from 'react';
import styled from 'styled-components';
import {TextFieldControl} from '../../../Controls';
import {Button} from '@material-ui/core';
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


const UnitTypeItem = ({item, isEditing, fetchUnitTypes, url}) => {
    const [unitType, setUnitType] = useState(item);

    const handleChange = prop => value => {
        setUnitType({...unitType, [prop]: value});
    }

    const handleAddUnitTypeClick = async () => {
        let response;

        if(isEditing){
            response = await restClient.httpPut(url, unitType);
        }else{
            response = await restClient.httpPost(url, unitType);
        }

        if(response === 'success' || utils.evaluateObject(response)){
            fetchUnitTypes();
        }
    }

    return (
        <UnitTypeItemStyled>
            <TextFieldControl 
                initialValue={isEditing ? unitType.nombre : ''} 
                label="Nombre Condutor" 
                onChange={handleChange('nombre')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? unitType.identidad : ''} 
                label="Identidad" 
                onChange={handleChange('identidad')} 
            />
            
            <TextFieldControl 
                initialValue={isEditing ? unitType.edad : ''} 
                label="Edad" 
                onChange={handleChange('edad')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? unitType.genero : ''} 
                label="genero" 
                onChange={handleChange('genero')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? unitType.telefono : ''} 
                label="Telefono" 
                onChange={handleChange('telefono')} 
            />

            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleAddUnitTypeClick} >
                Add
            </Button>
        </UnitTypeItemStyled>
    )
}

export default UnitTypeItem;