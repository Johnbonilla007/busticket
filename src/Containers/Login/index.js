import React, {useState} from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {TextFieldControl} from '../../Controls';
import BackgroundMain from '../../BackgroundMain/main';

import logo from '../../logo.jpg';

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
            width: 70%;
            padding: 10px;
            margin: 10px;
            /* background-color: rgba(0, 0, 0, 0.4); */
            background: #ffffff;
            border-radius: 5px;

            -moz-box-shadow: 11px 10px 5px -8px rgba(0,0,0,0.42);
            box-shadow: 11px 10px 5px -8px rgba(0,0,0,0.42);

            img {
                height: 50%;
                width: 50%;
            }
        }
    }
`;


const Login = ({history}) => {
    const [user, setUser] = useState({
        userName: '',
        password: '',
    })

    const handleChange = prop => (value) => {
        setUser({...user, [prop]: value});
    }

    const handleEnterClick = () => {
        if(user.userName === 'busticket' && user.password === '1234'){
            history.push('/home');
        }
    }

    return (
        <ContainerStyled>
            {/* <BackgroundMain top="0px" /> */}
            
            <div className="login">
                
                <div className="fields">
                    <img src={logo} />

                    <div>
                        <Typography>Usuario</Typography>
                        <TextFieldControl onChange={handleChange('userName')} />

                        <Typography>Contraseña</Typography>
                        <TextFieldControl typeField="password" onChange={handleChange('password')} />

                        <Button onClick={handleEnterClick} variant="contained" color="primary">Entrar</Button>
                    </div>  
                </div>
            </div>
        </ContainerStyled>
    )
}


export default Login;