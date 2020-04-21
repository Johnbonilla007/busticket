import React from 'react';
import styled from 'styled-components';

const ClientStyled = styled.div`
    /* color: #ffffff; */

    .greeting-client {
        display: grid;
        grid-template-columns: 44px auto;

        align-items: center;

        span {
            font-size: 14pt;
        }
    }

`;

const Client = ({ client }) => {
    
    return (
        <ClientStyled>


            <div className="greeting-client">
                <h3>Hola</h3>
                <span>{`${client.nombreCliente}, Gracias por llegar hasta aquí!!`}</span>
            </div>


            {/* <div>
                <strong>Cliente Id: </strong>
                <span>{client.clienteId}</span>
            </div> */}
            {/* <div>
                <strong>Nombre: </strong>
                <span>{client.nombreCliente}</span>
            </div>
            <div>
                <strong>Género: </strong>
                <span>{client.generoCliente}</span>
            </div>
            <div>
                <strong>Edad: </strong>
                <span>{client.edadCliente}</span>
            </div>
            <div>
                <strong>Celular: </strong>
                <span>{client.telefonoCliente}</span>
            </div>
            <div>
                <strong>Dirección: </strong>
                <span>{client.direccionCliente}</span>
            </div>
            <div>
                <strong>Correo Electrónico: </strong>
                <span>{client.correoCliente}</span>
            </div> */}
        </ClientStyled>
    )
}


export default Client;