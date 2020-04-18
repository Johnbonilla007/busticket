import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { PanelControl, TableControl, TextFieldControl } from '../../Controls';

import { Button } from '@material-ui/core';

import { restClient } from '../../services/restClient';
import { utils } from '../../utils';
import UnitTypeItem from './components/MotoristItem';
import Dashboard from '../../Dashboard';
import MenuScreen from '../../Controls/MenuScreen';
import UploadImage from '../../Controls/UploadImage';
import { motoristColumnTable } from './setting';

const MotoristStyled = styled.div`
    overflow: auto;
    display: grid;
    grid-template-rows: 60px 80px 40px calc(100% - 180px);
`;

const Motorist = (props) => {
    const [motorists, setMotorists] = useState([]);
    const [motoristsFilters, setMotoristsFilters] = useState([]);

    const nameScreen = 'Motorist';
    // const url = 'motorist';
    const url = 'conductores';


    useEffect(() => {
        fetchMotorists();
    }, []);

    const fetchMotorists = async () => {
        const response = await restClient.httpGet(url);

        if(utils.evaluateArray(response)){
            setMotorists(response);
        }
    }

    const handleSearchMotoristChange = async value => {
        if(!value){
            fetchMotorists();
            return;
        }

        const response = await restClient.httpGet(url, { conductor: { nombre: value } });

        if(response == null){
            setMotorists([]);
            return;
        }

        if(utils.evaluateObject(response)){
            setMotorists([]);

            return;
        }

        setMotorists(response);

        // const filters = motorists.filter(item => item.name.toUpperCase().includes(value.toUpperCase()));

        // if(utils.evaluateArray(filters)){
        //     setMotoristsFilters(filters);
        //     return;
        // }

        // setMotoristsFilters([]);
    }

    const handleAddDestinationClick = () => {

    }

    const handleDeleleClick = row => async () => {
        const response = await restClient.httpDelete(url, row.id);
    }

    const onRenderCellDelete = row => {
        return <Button variant="contained" color="secondary" onClick={handleDeleleClick(row)}> Delete </Button>
    }

    const onRenderCellEdit = row => {
        return <PanelControl anchor="right" label={`Edit ${nameScreen}`} title={`Edit ${nameScreen}`}>
            <UnitTypeItem item={row} isEditing fetchMotorists={fetchMotorists} url={url} />
        </PanelControl>
    }

    return (
        <MotoristStyled>
            <h2>{nameScreen}</h2>

            <TextFieldControl 
                // label={`Search ${nameScreen}`} 
                placeholder="Escribe (ConductorId, Nombre, Identidad)" 
                onEnter={handleSearchMotoristChange} />

            <PanelControl anchor="right" label={`Add ${nameScreen}`} title={`Add ${nameScreen}`}>
                <UnitTypeItem fetchMotorists={fetchMotorists} url={url} />
            </PanelControl>

            <TableControl
                fieldKey="conductorId"
                rows={utils.evaluateArray(motoristsFilters) ? motoristsFilters : motorists}
                columns={motoristColumnTable(onRenderCellEdit, onRenderCellDelete)}
            />
        </MotoristStyled>
    )
}

export default Motorist;