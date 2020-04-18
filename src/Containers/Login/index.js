import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { TextFieldControl } from '../../Controls';
import BackgroundMain from '../../BackgroundMain/main';

import logo from '../../logo.jpg';
import { utils } from '../../utils';
import { restClient } from '../../services/restClient';

const ContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 50%;

        .fields {
            display: flex;
            align-items: center;
            justify-content: center;
            /* width: 70%; */
            padding: 10px;
            margin: 10px;
            /* background-color: rgba(0, 0, 0, 0.4); */
            background: #ffffff;
            border-radius: 5px;
            z-index: 2;
            opacity: 90%;

            -moz-box-shadow: 11px 10px 5px -8px rgba(0,0,0,0.42);
            box-shadow: 11px 10px 5px -8px rgba(0,0,0,0.42);

            img {
                height: 50%;
                width: 50%;
            }

            width: 300px;
            height: 260px;


            .container-fields {
                z-index: 3;
            }
        }
    }
`;


const Login = ({ history }) => {
    const [user, setUser] = useState({
        userName: '',
        password: '',
    });

    const onSucccess = position => {
        // location = position;
    }

    const onError = () => {
        //   location = null;
    }

    if (!!navigator.geolocation) {
        var config = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        };

        navigator.geolocation.getCurrentPosition(onSucccess, onError, config);
    }

    const handleChange = prop => (value) => {
        setUser({ ...user, [prop]: value });
    }

    const handleEnterClick = async () => {

        // const response = await restClient.httpLoginAcces('login', user);

        // if (response) {
            history.push('/home');
        // }
    }

    return (
        <ContainerStyled>
            <BackgroundMain top="0px" />

            <div className="login">

                <div className="fields">
                    {/* <img src={logo} /> */}

                    <div className="container-fields">
                        <strong>Usuario</strong>
                        <TextFieldControl onChange={handleChange('userName')} />

                        <strong>Contraseña</strong>
                        <TextFieldControl typeField="password" onChange={handleChange('password')} />

                        <Button onClick={handleEnterClick} variant="contained" color="primary">Entrar</Button>
                    </div>
                </div>
            </div>
        </ContainerStyled>
    )
}


export default Login;