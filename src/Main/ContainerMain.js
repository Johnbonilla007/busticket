import React, {useState} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PrimarySearchAppBar from '../Controls/AppBar';

import { Header } from './Header';
import Dashboard from '../Dashboard';

import { routes } from '../routes';
import BackgroundMain from '../BackgroundMain/main';
import MenuScreen from '../Controls/MenuScreen';

const ContainerMainStyled = styled.div`
    background: #eeeeee;
    
    .container {
        display: grid;
        /* grid-template-rows: 120px calc(100% - 120px); */
        position: fixed;
        top: 70px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        padding: 5px;

        /* background: #eeeeee; */
    }
`;

const ComponentWithMenuStyled = styled.div`
    display: grid;
    grid-template-rows: 120px calc(100% - 120px);
`;

const ComponentWithMenu = ({component, history, location, match}) => {

    const Component = React.createElement(component, {history, location, match});
    
    return(
        <ComponentWithMenuStyled>
            <MenuScreen width={100} height={100} />
            {Component}
        </ComponentWithMenuStyled>
    )
}

export const ContainerMain = ({history}) => {

    const routeComponents = routes.map(({path, component}, key) => 
                                            <Route 
                                                exact 
                                                path={path} 
                                                component={(props) => <ComponentWithMenu {...props} component={component} />} 
                                                key={key} 
                                            />
                                        );

    return <ContainerMainStyled>
        <BackgroundMain top="70px" />
        <div className="container">
            <Header> <PrimarySearchAppBar /> </Header>
            {/* <Dashboard /> */}
                <Router>
                    <Switch>
                        {routeComponents}
                        <Route exact path="/home" component={Dashboard}/>
                    </Switch>
                </Router>
        </div>
    </ContainerMainStyled>}