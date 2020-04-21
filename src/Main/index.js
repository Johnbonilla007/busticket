import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Login from '../Containers/Login';

import { ContainerMain } from './ContainerMain';

import AlertNotification from '../Controls/Alert';
import WaitControl from '../Controls/Wait';
import BackgroundMain from '../BackgroundMain/main';
import Store from '../Store';

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
        <BackgroundMain top="0px" />
        <Router>
            <Switch>

                <Route path="/home" render={props => <Store><ContainerMain {...props} /></Store>} />
                <Route path="/dashboard" render={props => <Store><ContainerMain {...props} /></Store>} />
                <Route path="/" render={props => <Store><Login {...props} /></Store>} />

                {/* <Route path="/home" component={ContainerMain}/>
                      <Route path="/dashboard" component={ContainerMain}/>
                      <Route path="/" component={Login}/> */}
            </Switch>
        </Router>

        <AlertNotification id="alert-notification" />
        <WaitControl />

        {/* <div id="alert-notification" /> */}
    </MainStyled>