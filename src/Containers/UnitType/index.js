import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { PanelControl, TableControl, TextFieldControl } from '../../Controls';

import { Button } from '@material-ui/core';

import { restClient } from '../../services/restClient';
import { utils } from '../../utils';
import UnitTypeItem from './components/UnitTypeItem';

const MotoristStyled = styled.div`
    overflow: auto;
    display: grid;
    grid-template-rows: 60px 80px 40px calc(100% - 180px);
`;

const UnitType = () => {
    const [unitTypes, setUnitTypes] = useState([]);

    const nameScreen = 'Unit Type';
    const url = 'tipos-unidades';

    useEffect(() => {
        fetchUnitTypes();
    }, []);

    const fetchUnitTypes = async () => {
        const response = await restClient.httpGet(url);

        setUnitTypes(response);
    }

    const handleSearchUnitTypesEnter = async value => {
        const response = await restClient.httpGet(url, {
            tipoUnidad: {
                categoria: value
            }
        });

        if (utils.evaluateArray(response)) {
            setUnitTypes(response);
        }
    }

    const handleDeleleClick = row => async () => {
        const response = await restClient.httpDelete(url, {
            tipoUnidad: {
                tipoUnidadId: row.tipoUnidadId
            }
        });

        if(response.mensaje === 'Success'){
            fetchUnitTypes();
        }
    }

    const onRenderCellDelete = row => {
        return <Button variant="contained" color="secondary" onClick={handleDeleleClick(row)}> Delete </Button>
    }

    const onRenderCellEdit = row => {
        return <PanelControl anchor="right" label={`Edit ${nameScreen}`} title={`Edit ${nameScreen}`}>
            <UnitTypeItem item={row} isEditing fetchUnitTypes={fetchUnitTypes} url={url} />
        </PanelControl>
    }

    return (
        <MotoristStyled>
            <h2>Unit Types</h2>

            <TextFieldControl
                placeholder="Escriba [Categoría]"
                onEnter={handleSearchUnitTypesEnter}
            />

            <PanelControl anchor="right" label={`Add ${nameScreen}`} title={`Add ${nameScreen}`}>
                <UnitTypeItem fetchUnitTypes={fetchUnitTypes} url={url} />
            </PanelControl>

            <TableControl
                fieldKey="tipoUnidadId"
                rows={utils.evaluateArray(unitTypes) ? unitTypes : []}
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
                            id: 'tipoUnidadId',
                            numeric: false,
                            disablePadding: false,
                            label: "Tipo Unidad Id",
                            minWidth: 10,
                        },
                        {
                            id: 'categoria',
                            numeric: false,
                            disablePadding: false,
                            label: "Categoria",
                        },
                        {
                            id: 'descripcion',
                            numeric: false,
                            disablePadding: false,
                            label: "Descripción",
                        },
                        {
                            id: 'estado',
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