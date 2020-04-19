import React, { useState } from 'react';
import { FormLabel, FormControlLabel, RadioGroup, Radio, Button } from '@material-ui/core';

import styled from 'styled-components';

import { TextFieldControl } from '../../../Controls';
import { restClient } from '../../../services/restClient';
import { utils } from '../../../utils';

const RegisterUserStyled = styled.div`
    display: grid;
    grid-template-rows: 116px 60px 60px 60px 60px 60px 100px;
    background-color: #ffffff;

    -moz-box-shadow: 11px 10px 5px -8px rgba(0,0,0,0.42);
    box-shadow: 11px 10px 5px -8px rgba(0,0,0,0.42);
    height: 560px;

    padding: 5px;

    p {
        font-style: italic;
        color: rgb(63, 81, 181);        
    }

    .MuiFormLabel-root {
        padding-left: 5px;
    }

    .MuiFormGroup-root {
        flex-direction: row;
        padding-left: 5px;
    }
    
    .name {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-column-gap: 5px;
    }
`;


const RegisterUserForm = () => {

    const [user, setUser] = useState({
        name: '',
        lastName: '',
        identity: '',
        phone: '',
        email: '',
        password: '',
        sex: '',
        direction: '',
    });

    const handleChange = prop => (value) => {
        setUser({ ...user, [prop]: value });
    }

    const handelSexChange = event => {
        setUser({ ...user, sex: event.target.value });
    }

    const handleRegisterClientClick = async () => {

        const responseUser = await restClient.httpPost('usuarios/crear-usuario', {
            usuario: {
                userName: user.email,
                password: user.password
            }
        })

        debugger

        if (!utils.evaluateObject(responseUser)) {
            return;
        }

        const request = {
            cliente: {
                nombreCliente: `${user.name} ${user.lastName}`,
                generoCliente: user.sex === "mujer" ? 'F' : 'M',
                edadCliente: user.age,
                telefonoCliente: user.phone,
                direccionCliente: user.direction,
                correoCliente: user.email
            }
        }

        const response = await restClient.httpPost('clientes', request);

        debugger
    }

    return (
        <RegisterUserStyled>
            <div>
                <h1>Registrate</h1>
                <p>Solo tomará un minuto... Inténtalo...</p>
            </div>

            <div className="name">
                <TextFieldControl
                    placeholder="Nombre"
                    onChange={handleChange('name')}
                />
                <TextFieldControl
                    placeholder="Apellido"
                    onChange={handleChange('lastName')}
                />
            </div>

            <div className="name">
                <TextFieldControl
                    placeholder="Identidad"
                    onChange={handleChange('identity')}
                />
                <div className="name">
                    <TextFieldControl
                        placeholder="Telefono"
                        onChange={handleChange('phone')}
                    />

                    <TextFieldControl
                        placeholder="Edad"
                        onChange={handleChange('age')}
                    />
                </div>
            </div>

            <TextFieldControl
                placeholder="Correo Electrónico"
                onChange={handleChange('email')}
            />

            <TextFieldControl
                placeholder="Contraseña"
                typeField="password"
                onChange={handleChange('password')}
            />

            <TextFieldControl
                placeholder="Dirección [calle, barrio, Colonia, Casa, Color]"
                onChange={handleChange('direction')}
            />

            <div>
                <FormLabel component="legend">Sexo</FormLabel>
                <RadioGroup value={user.sex} onChange={handelSexChange}>
                    <FormControlLabel value="mujer" control={<Radio />} label="Mujer" />
                    <FormControlLabel value="hombre" control={<Radio />} label="Hombre" />
                    <FormControlLabel value="personalizado" control={<Radio />} label="Personalizado" />
                </RadioGroup>
            </div>

            <div>
                <Button
                    color="primary"
                    onClick={handleRegisterClientClick}
                    variant="contained">
                    Registrarme
                </Button>
            </div>
        </RegisterUserStyled>
    )
}


export default RegisterUserForm;