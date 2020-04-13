import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Departments from './components/departments';
import DestinationItem from './components/DestinationItem';
import{PanelControl, TableControl, TextFieldControl } from '../../Controls';

import {Button} from '@material-ui/core';

import { restClient } from '../../services/restClient';
import { utils } from '../../utils';

const DestinationsStyled = styled.div`
    overflow: auto;

    h2 {
        color: white;
    }
`;

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    const [destinationsFilters, setDestinationsFilters] = useState([]);

    useEffect(() => {
        const fetchDestinarions = async () => {
            const response = await restClient.httpGet('destinations');

            setDestinations(response);
        }

        fetchDestinarions();
    }, []);

    const handleSearchDestinationChange = value => {
        const filters = destinations.filter(item => item.name.toUpperCase().includes(value.toUpperCase()));

        if(utils.evaluateArray(filters)){
            setDestinationsFilters(filters);
            return;
        }

        setDestinationsFilters([]);
    }

    const handleAddDestinationClick = () => {

    }

    const handleDeleleClick = row => async () => {
        const response = await restClient.httpDelete('destinations', row.id);
    }

    const onRenderCellDelete = row => {
        return <Button variant="contained" color="secondary" onClick={handleDeleleClick(row)}> Delete </Button>
    }

    return (
        <DestinationsStyled>
            <h2>Destinations</h2>
            {/* <Departments /> */}

            <TextFieldControl theme="oscuro" label="Search Destination" onChange={handleSearchDestinationChange} />

            <PanelControl anchor="right" label="Add Destination" title="Add Destination">
                <DestinationItem />
            </PanelControl>

            <TableControl
                fieldKey="destinationId"
                rows={utils.evaluateArray(destinationsFilters) ? destinationsFilters : destinations}
                columns={
                    [
                        {
                            onRenderCell: onRenderCellDelete,
                        },
                        {
                            id: 'id',
                            numeric: false,
                            disablePadding: false,
                            label: "Destino Id",
                        },
                        {
                            id: 'name',
                            numeric: false,
                            disablePadding: false,
                            label: "Nombre",
                        },
                        {
                            id: 'destinationDepartment',
                            numeric: false,
                            disablePadding: false,
                            label: "Departamento Destino",
                        },
                        {
                            id: 'destinationCity',
                            numeric: false,
                            disablePadding: false,
                            label: "Ciudad Destino",
                        }
                    ]
                }
            />

            {/* <DestinationItem /> */}
        </DestinationsStyled>
    )
}

export default Destinations;