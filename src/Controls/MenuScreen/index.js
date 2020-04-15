import React, {state} from 'react';
import styled from 'styled-components';
import { Cards } from '..';
import { routes } from '../../routes';
import MenuScreenItem from './components/MenuScreenItem';

const MenuScreenStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, ${prop => `${prop.width}px`});
    grid-column-gap: 5px;

    justify-content: center;
    align-items: center;

`;

const MenuScreen = ({width, height }) => {

    const handleSelectedItem = item => {

    }

    return (
        <MenuScreenStyled width={width} height={height}>
            {routes.map(item => <MenuScreenItem 
                                    height={height} 
                                    width={width} 
                                    item={item} 
                                    onClick={handleSelectedItem} 
                                    />)
            }
        </MenuScreenStyled>
    )
}

export default MenuScreen;