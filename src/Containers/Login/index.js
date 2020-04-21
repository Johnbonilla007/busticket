import React, { useState, useEffect } from 'react';

import { Button, Grow } from '@material-ui/core';

import { TextFieldControl } from '../../Controls';
import BackgroundMain from '../../BackgroundMain/main';

import logo from '../../logo.jpg';
import { utils } from '../../utils';
import { restClient } from '../../services/restClient';
import RegisterUserForm from './components/RegisterUser';
import { ContainerStyled } from './style';
import withState from '../../Store/withState';



const Login = ({ history, dispatch }) => {
    const [user, setUser] = useState({
        userName: '',
        password: '',
    });

    const handleChange = prop => event => {
        setUser({ ...user, [prop]: event.target.value });
    }

    const handleEnterClick = async () => {

        if (!user.userName || !user.password) {
            return;
        }

        const response = await restClient.httpPost('usuarios', {
            usuario: user,
        });

        if (response.esAdmin) {
            response.accesos = ['client', 'destinos', 'schedule', 'conductores', 'unitTypes', 'transportationUnits'];
        } else {
            response.accesos = ["reserve"];
        }



        if (response.mensaje === 'Autorizado') {

            const clientResponse = await restClient.httpGet('clientes', {
                cliente: {
                    correoCliente: user.userName,
                }
            })

            const payload = {
                user: { ...response },
                client: { ...clientResponse[0] }
            };

            sessionStorage.setItem('user', JSON.stringify(payload));

            dispatch({ type: 'USER_ACTION', payload });

            history.push('/home');
        }
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


export default withState(Login);