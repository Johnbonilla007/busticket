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
                initialValue={isEditing ? unitType.name : ''} 
                label="Nombre Condutor" 
                onChange={handleChange('name')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? unitType.identity : ''} 
                label="Identidad" 
                onChange={handleChange('identity')} 
            />
            
            <TextFieldControl 
                initialValue={isEditing ? unitType.age : ''} 
                label="Edad" 
                onChange={handleChange('age')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? unitType.genero : ''} 
                label="genero" 
                onChange={handleChange('genero')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? unitType.phone : ''} 
                label="Telefono" 
                onChange={handleChange('phone')} 
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