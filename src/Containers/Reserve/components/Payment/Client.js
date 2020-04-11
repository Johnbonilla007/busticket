import React from 'react';
import styled from 'styled-components';

const ClientStyled = styled.div``;

const Client = ({client}) => {

    return (
        <ClientStyled>
            <h2>Client</h2>
                <div>
                    <strong>Nombre: </strong>
                    <span>{client.name}</span>
                </div>
                <div>
                    <strong>Género: </strong>
                    <span>{client.genero}</span>
                </div>
                <div>
                    <strong>Edad: </strong>
                    <span>{client.age}</span>
                </div>
                <div>
                    <strong>Celular: </strong>
                    <span>{client.celular}</span>
                </div>
                <div>
                    <strong>Dirección: </strong>
                    <span>{client.direction}</span>
                </div>
                <div>
                    <strong>Correo Electrónico: </strong>
                    <span>{client.email}</span>
                </div>
        </ClientStyled>
    )
}


export default Client;