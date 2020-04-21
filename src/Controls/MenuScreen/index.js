import React, { state } from 'react';
import styled from 'styled-components';
import { Cards } from '..';
import { routes } from '../../routes';
import MenuScreenItem from './components/MenuScreenItem';
import withState from '../../Store/withState';

const MenuScreenStyled = styled.div`
    display: grid;
    justify-items: center;

    .cards-container {
        /* display: grid;
        grid-template-columns: repeat(auto-fit, ${prop => `${prop.width}px`});
        grid-template-rows: 120px;
        grid-row: 100px;
        grid-column-gap: 5px; */

        box-shadow: 2px 3px 13px -7px rgba(0,0,0,0.63);

        display: flex;

        justify-content: center;
        align-items: center;
        overflow-x: auto;
        overflow-y: hidden;
        
        height: 120px;

        width: auto;

        @media screen and (max-width: 880px) {
            width: 100%;
        }

        

        .card-item {
            width: ${prop => `${prop.width}px`};
            padding: 3px;
        }
    }

`;

const MenuScreen = ({ width, height, state }) => {

    const handleSelectedItem = item => {

    }

    const authorizedScreens = routes.filter(route => state.user.accesos.some(name => name === route.name));

    return (
        <MenuScreenStyled width={width} height={height}>
            <div className="cards-container">
                {authorizedScreens.map(item => <div className="card-item">
                    <MenuScreenItem
                        height={height}
                        width={width}
                        item={item}
                        onClick={handleSelectedItem}
                    />
                </div>)
                }
            </div>
        </MenuScreenStyled>
    )
}

export default withState(MenuScreen);