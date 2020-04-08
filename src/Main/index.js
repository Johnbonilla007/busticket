import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styled from 'styled-components';

import Login from '../Containers/Login';

import { ContainerMain } from './ContainerMain';

import AlertNotification from '../Controls/Alert';

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
                <Router>
                  <Switch>
                      <Route path="/home" component={ContainerMain}/>
                      <Route path="/dashboard" component={ContainerMain}/>
                      <Route path="/" component={Login}/>
                </Switch>  
            </Router>

            <AlertNotification id="alert-notification" />

            {/* <div id="alert-notification" /> */}
            </MainStyled>