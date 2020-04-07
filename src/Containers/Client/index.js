import React, {useState} from 'react';
import clsx from 'clsx';


import TextField from '@material-ui/core/TextField';

import { ClientStyled } from './style';
import { Combobox, FormattedInput, TextFieldControl } from '../../Controls';

const Client = () => {
    const [client, setClient] = useState({
        name: '',
        genero: '',
        age: '',
        phone: '',
        direction: '',
        email: ''
    });

    const handleOnChange = prop => value => {
        setClient({...client, [prop]: value});
    }

    const handleGeneroOnChange = option => {
        setClient({...client, genero: option.key});
    }

    return (
        <ClientStyled>
            <h2>Agregar Cliente</h2>
            <div className="container">
                <TextFieldControl label="Nombre" onChange={handleOnChange('name')} />
                <Combobox 
                    label="Genero" 
                    options={[{key: 'name', text: "Erlin"}, {key: 'lastName', text: "Banegas"}]} 
                    onChange={handleOnChange('genero')}
                />
                <TextFieldControl typeField="number" label="Edad" onChange={handleOnChange('age')} />
                <TextFieldControl 
                    typeField="prefix" 
                    label="Celular" 
                    prefix={{position: 'start', text: '(504)'}} 
                    onChange={handleOnChange('phone')} 
                />
                <TextFieldControl label="Dirección" onChange={handleOnChange('direction')} />
                <TextFieldControl 
                    typeField="prefix" 
                    label="Correo Electrónico" 
                    prefix={{position: 'end', text: '.com'}} 
                    onChange={handleOnChange('email')}
                />
            </div>
        </ClientStyled>
    )
}


export default Client;