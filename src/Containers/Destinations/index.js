import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Departments from './components/departments';
import DestinationItem from './components/DestinationItem';
import { PanelControl, TableControl, TextFieldControl } from '../../Controls';

import { Button } from '@material-ui/core';

import { restClient } from '../../services/restClient';
import { utils } from '../../utils';
import { destinationsColumnsTable } from './settting';

const DestinationsStyled = styled.div`
    overflow: auto;
    display: grid;
    grid-template-rows: 60px 80px 40px calc(100% - 180px);
`;

const url = 'destinos';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetchDestinarions();
    }, []);

    const fetchDestinarions = async () => {
        const response = await restClient.httpGet(url);

        if (utils.evaluateArray(response)) {
            setDestinations(response);
        }
    }

    const handleSearchDestinationChange = async value => {
        if (!value) {
            fetchDestinarions();
            return;
        }

        const response = await restClient.httpGet(url, { nombreDestino: value });

        if (utils.evaluateArray(response)) {
            setDestinations(response);
            return;
        }

        setDestinations([]);
    }

    const handleAddDestinationClick = () => {

    }

    const handleDeleleClick = row => async () => {
        const request = {
            destino: {
                destinoId: row.destinoId
            }
        }

        const response = await restClient.httpDelete(url, request);

        if (response.mensaje === "Success") {
            fetchDestinarions();
        }
    }

    const onRenderCellDelete = row => {
        return <Button variant="contained" color="secondary" onClick={handleDeleleClick(row)}> Delete </Button>
    }

    const onRenderCellEdit = row => {
        return <PanelControl anchor="right" label="Edit" title="Edit Destination">
            <DestinationItem url={url} item={row} isEditing fetchDestinarions={fetchDestinarions} />
        </PanelControl>
    }

    return (
        <DestinationsStyled>
            <h2>Destinations</h2>

            <TextFieldControl
                placeholder="Escribe [Nombre Destino]"
                onEnter={handleSearchDestinationChange} />

            <PanelControl anchor="right" label="Add Destination" title="Add Destination">
                <DestinationItem url={url} fetchDestinarions={fetchDestinarions} />
            </PanelControl>

            <TableControl
                fieldKey="destinationId"
                rows={destinations}
                columns={destinationsColumnsTable(onRenderCellEdit, onRenderCellDelete)}
            />
        </DestinationsStyled>
    )
}

export default Destinations;