import React, {useState} from 'react';
import styled from 'styled-components';

import DestinationItem from './DestinationItem';
import {TextFieldControl} from '../../../../Controls';

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

const Destinations = ({data, onSelectedItem}) => {
    const [destinations, setDestinations] = useState(data);

    const handleSearchDestinationChange = value => {
        if(!value){
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
            </div>
        </DestinationsStyled>
    )
}


export default Destinations;