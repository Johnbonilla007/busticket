import React, {useState} from 'react';
import styled from 'styled-components';
import {TextFieldControl} from '../../../Controls';
import {Button} from '@material-ui/core';
import { restClient } from '../../../services/restClient';
import { utils } from '../../../utils';

const MotoristItemStyled = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 100px 100px 100px;
    width: 600px;
`;


const MotoristItem = ({item, isEditing, fetchMotorists, url}) => {
    const [motorist, setMotorist] = useState(item);

    const handleChange = prop => value => {
        setMotorist({...motorist, [prop]: value});
    }

    const handleAddMotoristClick = async () => {
        let response;

        if(isEditing){
            response = await restClient.httpPut(url, motorist);
        }else{
            response = await restClient.httpPost(url, motorist);
        }

        if(response === 'success' || utils.evaluateObject(response)){
            fetchMotorists();
        }
    }

    return (
        <MotoristItemStyled>
            <TextFieldControl 
                initialValue={isEditing ? motorist.name : ''} 
                label="Nombre Condutor" 
                onChange={handleChange('name')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? motorist.identity : ''} 
                label="Identidad" 
                onChange={handleChange('identity')} 
            />
            
            <TextFieldControl 
                initialValue={isEditing ? motorist.age : ''} 
                label="Edad" 
                onChange={handleChange('age')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? motorist.genero : ''} 
                label="genero" 
                onChange={handleChange('genero')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? motorist.phone : ''} 
                label="Telefono" 
                onChange={handleChange('phone')} 
            />

            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleAddMotoristClick} >
                Add
            </Button>
        </MotoristItemStyled>
    )
}

export default MotoristItem;