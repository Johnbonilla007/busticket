import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { TextFieldControl } from '../../../../Controls';
import ScheduleItem from './ScheduleItem';
import { restClient } from '../../../../services/restClient';
import { utils } from '../../../../utils';

const SheduleStyled = styled.div`
    display: grid;
    grid-template-rows: 80px calc(100% - 80px);
    height: 100%;

    .container-overflow {
        overflow: auto;
        position: relative;
    }

    .cards-container {
        position: absolute;
        left: 0px;
        right: 0px;
        display: grid;
        grid-template-columns: repeat(auto-fit, 360px);
        grid-row-gap: 10px;
        align-items: center;
        justify-content: center;
    }
`;

const Schedule = ({ selectedDestinationItem, onSelectedItem }) => {
    const [catalogs, setCatalogs] = useState([]);

    useEffect(() => {
        fetchCatalogDestination();
    }, []);

    const fetchCatalogDestination = async () => {
        const response = await restClient.httpGet('catalogo-viajes', {
            catalogoViaje: {
                destinoId: selectedDestinationItem.destinoId
            }
        });

        if (utils.evaluateArray(response)) {

            const transportationUnitResponse = await restClient.httpGet('unidades-transporte', {
                transportartionUnitIds: response.map(item => item.unidadTransporteId),
            })

            if (utils.evaluateArray(transportationUnitResponse)) {
                const unitTypes = await restClient.httpGet('tipos-unidades', {
                    unitTipeIds: transportationUnitResponse.map(item => item.tipoUnidadId),
                })

                const data = response.map(catalog => {
                    const transportationUnit = transportationUnitResponse.find(unit =>
                        unit.unidadTransporteId === catalog.unidadTransporteId);

                    const unitType = unitTypes.find(item => item.tipoUnidadId === transportationUnit.tipoUnidadId);



                    return {
                        ...catalog,
                        transportationUnit: {
                            ...transportationUnit,
                            unitType
                        },
                    }
                });

                setCatalogs(data);
                return;
            }
        }

        //Mensaje, no se ah definido un Horario
    }


    const handleSearchScheduleChange = value => {
        if (!value) {
            setCatalogs(catalogs);
            return;
        }

        const schedulersFound = catalogs.filter(item => item.name.toUpperCase().includes(value.toUpperCase()));

        setCatalogs(schedulersFound);
    }

    return (
        <SheduleStyled>
            <TextFieldControl label="Search Scheduler" onChange={handleSearchScheduleChange} />

            <div className="container-overflow">
                <div className="cards-container">
                    {utils.evaluateArray(catalogs) &&
                        catalogs.map(item =>
                            <ScheduleItem
                                item={item}
                                onClick={onSelectedItem}
                            />
                        )
                    }
                </div>
            </div>
        </SheduleStyled>
    )
}

export default Schedule;