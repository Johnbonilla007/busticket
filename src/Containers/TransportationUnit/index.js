import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { PanelControl, TableControl, TextFieldControl } from '../../Controls';

import { Button } from '@material-ui/core';

import { restClient } from '../../services/restClient';
import { utils } from '../../utils';
import TransportationUnitItem from './components/TransportationUnitItem';
import Dashboard from '../../Dashboard';
import MenuScreen from '../../Controls/MenuScreen';
import { transportationUnitColumnsTable } from './setting';

const TransportationUnitStyled = styled.div`
    overflow: auto;
    display: grid;
    grid-template-rows: 60px 80px 40px calc(100% - 180px);

    .filters {
        display: grid;
        grid-template-columns: 300px 200px 200px 240px;
    }
`;

const TransportationUnit = (props) => {
    const [tranportationUnits, setTransportationUnits] = useState([]);
    const [filters, setFilters] = useState({});

    const nameScreen = 'Transportation Unit';
    const url = 'unidades-transporte';

    useEffect(() => {
        fetchTransportationUnits();
    }, []);

    const fetchTransportationUnits = async () => {
        const response = await restClient.httpGet(url);

        setTransportationUnits(response);
    }

    const handleSearchTransportationUnitEnter = async value => {

        const response = await restClient.httpGet(url, {
            unidadTransporte: filters,
        });

        if (utils.evaluateArray(response)) {
            setTransportationUnits(response);
        }
    }

    const handleSearchTransportationUnitChange = prop => value => {
        setFilters({...filters, [prop]: value});
    }

    const handleDeleleClick = row => async () => {
        const response = await restClient.httpDelete(url, {
            unidadTransporte: {
                unidadTransporteId: row.unidadTransporteId
            }
        });

        if (response.mensaje === "Success") {
            fetchTransportationUnits();
        }
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

            <div className="filters">
                <TextFieldControl
                    placeholder="Escribe [Unidad Transporte Id]"
                    onEnter={handleSearchTransportationUnitEnter} 
                    onChange={handleSearchTransportationUnitChange('unidadTransporteNo')}
                />

                <TextFieldControl
                    placeholder="Escribe [Capacidad]"
                    onEnter={handleSearchTransportationUnitEnter} 
                    onChange={handleSearchTransportationUnitChange('capacidad')}
                />

                <TextFieldControl
                    placeholder="Escribe [Capacidad Fila]"
                    onEnter={handleSearchTransportationUnitEnter} 
                    onChange={handleSearchTransportationUnitChange('capacidadPorFilaUnidadTransporte')}
                />

                <TextFieldControl
                    placeholder="Escribe [Asientos Disponibles]"
                    onEnter={handleSearchTransportationUnitEnter} 
                    onChange={handleSearchTransportationUnitChange('asientosDisponibles')}
                />
            </div>

            <PanelControl anchor="right" label={`Add ${nameScreen}`} title={`Add ${nameScreen}`}>
                <TransportationUnitItem fetchTransportationUnits={fetchTransportationUnits} url={url} />
            </PanelControl>

            <TableControl
                fieldKey="id"
                rows={utils.evaluateArray(tranportationUnits) ? tranportationUnits : []}
                columns={transportationUnitColumnsTable(onRenderCellEdit, onRenderCellDelete)}
            />
        </TransportationUnitStyled>
    )
}

export default TransportationUnit;