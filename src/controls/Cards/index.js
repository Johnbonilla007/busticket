import React from 'react';
import styled from 'styled-components';
import { utils } from '../../utils';
import CardItem from './CardItem';

const CardsStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-column-gap: 5px;

    /* background: green; */
`;

const Cards = ({items, onClick}) => {

    return <CardsStyled>
                {utils.evaluateArray(items) ? items.map(item => <CardItem item={item} onClick={onClick} />) : null}
            </CardsStyled>
}

export default Cards;


