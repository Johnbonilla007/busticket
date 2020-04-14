import React, {useState} from 'react';
import styled from 'styled-components';
import {TextFieldControl} from '../../../Controls';
import {Button} from '@material-ui/core';
import { restClient } from '../../../services/restClient';
import { utils } from '../../../utils';

const DestinationItemStyled = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 100px;
    width: 600px;
`;


const DestinationItem = ({item, isEditing, fetchDestinarions}) => {
    const [destination, setDestination] = useState(item);

    const handleChange = prop => value => {
        setDestination({...destination, [prop]: value});
    }

    const handleAddDestinationClick = async () => {
        let response;

        if(isEditing){
            response = await restClient.httpPut('destinations', destination);
        }else{
            response = await restClient.httpPost('destinations', destination);
        }

        if(response === 'success' || utils.evaluateObject(response)){
            fetchDestinarions();
        }
    }

    return (
        <DestinationItemStyled>
            <TextFieldControl 
                initialValue={isEditing ? destination.name : ''} 
                label="Origen" 
                onChange={handleChange('name')} 
            />

            <TextFieldControl 
                initialValue={isEditing ? destination.destinationDepartment : ''} 
                label="Destination Department" 
                onChange={handleChange('destinationDepartment')} 
            />
            
            <TextFieldControl 
                initialValue={isEditing ? destination.destinationCity : ''} 
                label="Destination City" 
                onChange={handleChange('destinationCity')} 
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