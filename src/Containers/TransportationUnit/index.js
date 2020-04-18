import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import{PanelControl, TableControl, TextFieldControl } from '../../Controls';

import {Button} from '@material-ui/core';

import { restClient } from '../../services/restClient';
import { utils } from '../../utils';
import TransportationUnitItem from './components/TransportationUnitItem';
import Dashboard from '../../Dashboard';
import MenuScreen from '../../Controls/MenuScreen';

const TransportationUnitStyled = styled.div`
    overflow: auto;
    display: grid;
    grid-template-rows: 60px 80px 40px calc(100% - 180px);
`;

const TransportationUnit = (props) => {
    const [tranportationUnits, setTransportationUnits] = useState([]);
    const [transportationUnitsFilters, setTransportationUnitsFilters] = useState([]);

    const nameScreen = 'Transportation Unit';
    const url = 'transportationUnit';

    useEffect(() => {
        fetchTransportationUnits();
    }, []);

    const fetchTransportationUnits = async () => {
        const response = await restClient.httpGet(url);

        setTransportationUnits(response);
    }

    const handleSearchTransportationUnitChange = value => {
        const filters = tranportationUnits.filter(item => item.name.toUpperCase().includes(value.toUpperCase()));

        if(utils.evaluateArray(filters)){
            setTransportationUnitsFilters(filters);
            return;
        }

        setTransportationUnits([]);
    }

    const handleDeleleClick = row => async () => {
        const response = await restClient.httpDelete(url, row.id);
    }

    const onRenderCellDelete = row => {
        return <Button variant="contained" color="secondary" onClick={handleDeleleClick(row)}> Delete </Button>
    }

    const onRenderCellEdit = row => {
        return <PanelControl anchor="right" label={`Edit ${nameScreen}`} title={`Edit ${nameScreen}`}>
                    <TransportationUnitItem item={row} isEditing fetchTransportationUnits={fetchTransportationUnits} url={url} />
                </PanelControl>
    }

    return (
        <TransportationUnitStyled>
            <h2>Transportation Unit</h2>

            <TextFieldControl label={`Search ${nameScreen}`} onChange={handleSearchTransportationUnitChange} />

            <PanelControl anchor="right" label={`Add ${nameScreen}`} title={`Add ${nameScreen}`}>
                <TransportationUnitItem fetchTransportationUnits={fetchTransportationUnits} url={url} />
            </PanelControl>

            <TableControl
                fieldKey="id"
                rows={utils.evaluateArray(transportationUnitsFilters) ? transportationUnitsFilters : tranportationUnits}
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
                            label: "Transportation Id",
                            minWidth: 10,
                        },
                        {
                            id: 'motoristId',
                            numeric: false,
                            disablePadding: false,
                            label: "Conductor Id",
                        },
                        {
                            id: 'unitTypeId',
                            numeric: false,
                            disablePadding: false,
                            label: "Tipo Unidad Id",
                        },
                        {
                            id: 'transportationUnitNo',
                            numeric: false,
                            disablePadding: false,
                            label: "Unidad Transporte No",
                        },
                        {
                            id: 'capacity',
                            numeric: false,
                            disablePadding: false,
                            label: "Capacidad",
                        },
                        {
                            id: 'capacityRow',
                            numeric: false,
                            disablePadding: false,
                            label: "Capacidad Fila",
                        },
                        {
                            id: 'availableSeats',
                            numeric: false,
                            disablePadding: false,
                            label: "Asientos Disponibles",
                        }
                    ]
                }
            />

            {/* <DestinationItem /> */}
        </TransportationUnitStyled>
    )
}

export default TransportationUnit;