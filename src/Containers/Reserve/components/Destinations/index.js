import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DestinationItem from './DestinationItem';
import { TextFieldControl, TableControl } from '../../../../Controls';
import { restClient } from '../../../../services/restClient';
import { utils } from '../../../../utils';

const DestinationsStyled = styled.div`
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

const Destinations = ({ data, onSelectedItem }) => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetchDestinarions();
    }, []);

    const fetchDestinarions = async () => {
        const response = await restClient.httpGet('destinos');

        if (utils.evaluateArray(response)) {
            setDestinations(response);
        }
    }

    const handleSearchDestinationChange = value => {
        if (!value) {
            setDestinations(data);
            return;
        }

        const destinationsFound = data.filter(item => item.name.toUpperCase().includes(value.toUpperCase()));

        setDestinations(destinationsFound);
    }

    return (
        <DestinationsStyled>

            <TextFieldControl label="Search Destination" onChange={handleSearchDestinationChange} />

            <div className="container-overflow">
                <div className="cards-container">
                    {destinations.map(item => <DestinationItem item={item} onClick={onSelectedItem} />)}
                </div>

                {/* <TableControl
                    fieldKey="destinationId"
                    rows={destinations}
                    columns={[{
                        id: 'destinoId',
                        numeric: false,
                        disablePadding: false,
                        label: "Destino Id",
                        minWidth: 10,
                    },
                    {
                        id: 'nombreDestino',
                        numeric: false,
                        disablePadding: false,
                        label: "Nombre Destino",
                    },
                    {
                        id: 'departamentoDestino',
                        numeric: false,
                        disablePadding: false,
                        label: "Departamento Destino",
                    },
                    {
                        id: 'ciudadDestino',
                        numeric: false,
                        disablePadding: false,
                        label: "Ciudad Destino",
                    }]}
                /> */}

            </div>
        </DestinationsStyled>
    )
}


export default Destinations;