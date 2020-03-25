import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { ContainerMain } from './ContainerMain';

import PrimarySearchAppBar from '../controls/AppBar';

const MainStyled = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;

    background: #eeeeee;
`;

export const Main = () => 
            <MainStyled >
                <Header> <PrimarySearchAppBar /> </Header>
                <ContainerMain />
            </MainStyled>