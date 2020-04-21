import React, { useState } from 'react';
import styled from 'styled-components';
import { TextFieldControl, Combobox } from '../../../Controls';
import { Button } from '@material-ui/core';
import { restClient } from '../../../services/restClient';
import { utils } from '../../../utils';

const ClientItemStyled = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 100px;
    width: 600px;
`;


const ClientItem = ({ url, item, isEditing, fetchClients }) => {
    const [client, setClient] = useState(item);

    const handleChange = prop => value => {
        setClient({ ...client, [prop]: value });
    }

    const handleAddDestinationClick = async () => {

        const request = {
            cliente: client
        }

        const response = response = await restClient.httpPost(url, request);

        if (response.mensaje === 'Success') {
            fetchClients();
        }
    }

    return (
        <ClientItemStyled>
            <TextFieldControl label="Nombre" onChange={handleChange('nombreCliente')} />
            <TextFieldControl label="Identidad" onChange={handleChange('identidad')} />
            <Combobox
                label="Genero"
                options={[{ key: 'F', text: "Femenino" }, { key: 'M', text: "Masculino" }]}
                onChange={handleChange('generoCliente')}
            />
            <TextFieldControl typeField="number" label="Edad" onChange={handleChange('edadCliente')} />
            <TextFieldControl
                typeField="prefix"
                label="Celular"
                prefix={{ position: 'start', text: '(504)' }}
                onChange={handleChange('telefonoCliente')}
            />
            <TextFieldControl label="Dirección" onChange={handleChange('direccionCliente')} />
            <TextFieldControl
                typeField="prefix"
                label="Correo Electrónico"
                prefix={{ position: 'end', text: '.com' }}
                onChange={handleChange('correoCliente')}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleAddDestinationClick} >
                Add
            </Button>
        </ClientItemStyled>
    )
}

export default ClientItem;