import React, {useState} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PrimarySearchAppBar from '../Controls/AppBar';

import { Header } from './Header';
import Dashboard from '../Dashboard';

import { routes } from '../routes';
import BackgroundMain from '../BackgroundMain/main';

const ContainerMainStyled = styled.div`
    .container {
        position: fixed;
        top: 70px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        padding: 5px;
    }
`;

export const ContainerMain = () =>{

    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />)

    return <ContainerMainStyled>
        <BackgroundMain />
        <div className="container">
            <Header> <PrimarySearchAppBar /> </Header>
                    <Router>
                    <Switch>
                        {routeComponents}
                        <Route exact path="/home" component={Dashboard}/>
                    </Switch>
                </Router>
        </div>
    </ContainerMainStyled>}