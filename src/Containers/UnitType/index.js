import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import{PanelControl, TableControl, TextFieldControl } from '../../Controls';

import {Button} from '@material-ui/core';

import { restClient } from '../../services/restClient';
import { utils } from '../../utils';
import UnitTypeItem from './components/UnitTypeItem';

const MotoristStyled = styled.div`
    overflow: auto;
    display: grid;
    grid-template-rows: 60px 80px 40px calc(100% - 180px);

    h2 {
        color: white;
    }
`;

const UnitType = () => {
    const [unitTypes, setUnitTypes] = useState([]);
    const [unitTypeFilters, setUnitTypeFilters] = useState([]);

    const url = 'unitType';

    useEffect(() => {
        fetchUnitTypes();
    }, []);

    const fetchUnitTypes = async () => {
        const response = await restClient.httpGet(url);

        setUnitTypes(response);
    }

    const handleSearchUnitTypesChange = value => {
        const filters = unitTypes.filter(item => item.name.toUpperCase().includes(value.toUpperCase()));

        if(utils.evaluateArray(filters)){
            setUnitTypeFilters(filters);
            return;
        }

        setUnitTypeFilters([]);
    }

    const handleDeleleClick = row => async () => {
        const response = await restClient.httpDelete(url, row.id);
    }

    const onRenderCellDelete = row => {
        return <Button variant="contained" color="secondary" onClick={handleDeleleClick(row)}> Delete </Button>
    }

    const onRenderCellEdit = row => {
        return <PanelControl anchor="right" label="Edit" title="Edit Destination">
                    <UnitTypeItem item={row} isEditing fetchUnitTypes={fetchUnitTypes} url={url} />
                </PanelControl>
    }

    return (
        <MotoristStyled>
            <h2>Unit Types</h2>

            <TextFieldControl theme="oscuro" label="Search Destination" onChange={handleSearchUnitTypesChange} />

            <PanelControl anchor="right" label="Add Destination" title="Add Destination">
                <UnitTypeItem fetchUnitTypes={fetchUnitTypes} url={url} />
            </PanelControl>

            <TableControl
                fieldKey="destinationId"
                rows={utils.evaluateArray(unitTypeFilters) ? unitTypeFilters : unitTypes}
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
                            id: 'category',
                            numeric: false,
                            disablePadding: false,
                            label: "Categoria",
                        },
                        {
                            id: 'description',
                            numeric: false,
                            disablePadding: false,
                            label: "Descripción",
                        },
                        {
                            id: 'state',
                            numeric: false,
                            disablePadding: false,
                            label: "Estado",
                        },
                    ]
                }
            />
        </MotoristStyled>
    )
}

export default UnitType;