import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import{PanelControl, TableControl, TextFieldControl } from '../../Controls';

import {Button} from '@material-ui/core';

import { restClient } from '../../services/restClient';
import { utils } from '../../utils';
import UnitTypeItem from './components/MotoristItem';
import Dashboard from '../../Dashboard';
import MenuScreen from '../../Controls/MenuScreen';

const MotoristStyled = styled.div`
    overflow: auto;
    display: grid;
    grid-template-rows: 60px 80px 40px calc(100% - 180px);
`;

const Motorist = (props) => {
    const [motorists, setMotorists] = useState([]);
    const [motoristsFilters, setMotoristsFilters] = useState([]);

    const url = 'motorist';

    useEffect(() => {
        fetchMotorists();
    }, []);

    const fetchMotorists = async () => {
        const response = await restClient.httpGet(url);

        setMotorists(response);
    }

    const handleSearchMotoristChange = value => {
        const filters = motorists.filter(item => item.name.toUpperCase().includes(value.toUpperCase()));

        if(utils.evaluateArray(filters)){
            setMotoristsFilters(filters);
            return;
        }

        setMotoristsFilters([]);
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
        return <PanelControl anchor="right" label="Edit" title="Edit Destination">
                    <UnitTypeItem item={row} isEditing fetchMotorists={fetchMotorists} url={url} />
                </PanelControl>
    }

    return (
        <MotoristStyled>
            <h2>Motorists</h2>

            <TextFieldControl label="Search Destination" onChange={handleSearchMotoristChange} />

            <PanelControl anchor="right" label="Add Destination" title="Add Destination">
                <UnitTypeItem fetchMotorists={fetchMotorists} url={url} />
            </PanelControl>

            <TableControl
                fieldKey="destinationId"
                rows={utils.evaluateArray(motoristsFilters) ? motoristsFilters : motorists}
                columns={
                    [
                        {
                            onRenderCell: onRenderCellEdit,
                            minWidth: 30,
                        },
                        {
                            onRenderCell: onRenderCellDelete,
                        },
                        {
                            id: 'id',
                            numeric: false,
                            disablePadding: false,
                            label: "Motorist Id",
                            minWidth: 10,
                        },
                        {
                            id: 'name',
                            numeric: false,
                            disablePadding: false,
                            label: "Nombre",
                        },
                        {
                            id: 'identity',
                            numeric: false,
                            disablePadding: false,
                            label: "Identidad",
                        },
                        {
                            id: 'age',
                            numeric: false,
                            disablePadding: false,
                            label: "Edad",
                        },
                        {
                            id: 'genero',
                            numeric: false,
                            disablePadding: false,
                            label: "Genero",
                        },
                        {
                            id: 'phone',
                            numeric: false,
                            disablePadding: false,
                            label: "Telefono",
                        }
                    ]
                }
            />

            {/* <DestinationItem /> */}
        </MotoristStyled>
    )
}

export default Motorist;