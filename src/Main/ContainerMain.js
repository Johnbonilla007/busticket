import React, {useState} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PrimarySearchAppBar from '../Controls/AppBar';

import { Header } from './Header';
import Dashboard from '../Dashboard';

import { routes } from '../routes';

const ContainerMainStyled = styled.div`
    position: fixed;
    top: 70px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    padding: 5px;
`;

export const ContainerMain = () =>{

    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />)

    return <ContainerMainStyled>
        <Header> <PrimarySearchAppBar /> </Header>
            <Router>
                  <Switch>
                      {routeComponents}
                      <Route exact path="/home" component={Dashboard}/>
                </Switch>  
            </Router>

    </ContainerMainStyled>}