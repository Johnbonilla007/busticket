import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    height: 70px;

    /* background: red; */
`;

export const Header = ({children}) => <HeaderStyled> {children} </HeaderStyled>