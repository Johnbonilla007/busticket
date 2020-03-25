import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import Cards from '../controls/Cards';
import { EnhancedTableHead } from '../controls';
import PrimarySearchAppBar from '../controls/AppBar';
import { Header } from './Header';
import { routes } from '../routes';

const ContainerMainStyled = styled.div`
    position: fixed;
    top: 70px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    padding: 5px;

    /* background: blue; */
`;

const TestCards = () => <Cards items={routes} />

const TestTable = () => <EnhancedTableHead />;

export const ContainerMain = () =>
    <ContainerMainStyled>

        <Header> <PrimarySearchAppBar /> </Header>

        
            <Router>
                  <Switch>
                      <Route path="/home" component={TestCards}/>
                      <Route path="/home/table" component={TestTable}/>
                </Switch>  
            </Router>
    </ContainerMainStyled>