import React, { useState, useEffect } from 'react';

import { Button, Grow } from '@material-ui/core';

import { TextFieldControl } from '../../Controls';
import BackgroundMain from '../../BackgroundMain/main';

import logo from '../../logo.jpg';
import { utils } from '../../utils';
import { restClient } from '../../services/restClient';
import RegisterUserForm from './components/RegisterUser';
import { ContainerStyled } from './style';



const Login = ({ history }) => {
    const [user, setUser] = useState({
        userName: '',
        password: '',
    });

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
            <div className="login">
                <div className="fields">

                    <div className="field">
                        <strong>Correo Electrónico</strong>
                        <input onChange={handleChange('userName')} />
                    </div>

                    <div className="field">
                        <strong>Contraseña</strong>
                        <input type="password" onChange={handleChange('password')} />
                    </div>

                    <Button
                        className="button-enter"
                        onClick={handleEnterClick}
                        variant="contained" color="primary">
                        Entrar
                    </Button>
                </div>

                <div className="text">
                    <Grow in style={{ transformOrigin: '0 0 0' }}
                        {...{ timeout: 20000 }}>
                        <strong>
                            Reserva tu ticket, te llavaremos a donde tu imaginación pueda llegar...
                        </strong>
                    </Grow>
                </div>
            </div>

            <div className="content">
                <RegisterUserForm />
            </div>
        </ContainerStyled>
    )
}


export default Login;