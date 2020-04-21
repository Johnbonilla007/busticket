import React, { useState } from 'react';
import styled from 'styled-components';
import PaymentControl from '../../../Payment';
import Client from './Client';
import ScheduleItem from '../Schedule/ScheduleItem';
import PaymentsCard from '../PaymentsCard';
import { Button } from '@material-ui/core';

import { green } from '@material-ui/core/colors';
import { ModalControl } from '../../../../Controls';

import withState from '../../../../Store/withState';
import { restClient } from '../../../../services/restClient';

const PaymentStyled = styled.div`
    display: grid;
    justify-content: center;

    /* .detalle {
        background: 
    } */
`;

const Payment = ({ selectedDestinationItem, ticket, history, state }) => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    }

    const handlerPagarClick = () => {
        setOpen(true);
    }

    const handleSelectedPaymentCard = async paymentCard => {

        
        const response = await restClient.httpPost('reservas', {
            reserva: {
                catalogoViajeId: ticket.catalogoViajeId,
                clienteId: state.client.clienteId,
                estado: true,
            }
        })

        if(!response.mensaje === 'Success') {
            //Ocurrio algo malo
        }

        history.push('../home');
        onClose();
    }

    return (
        <PaymentStyled>
            {/* <TextFieldControl label="Identidad" /> */}
            <div>
                <Client client={state.client} />

                <h2>Tú Destino es: {selectedDestinationItem.nombreDestino}</h2>

                <div>
                    <h4>Detalle</h4>
                    <ScheduleItem item={ticket} onClick={() => { }} showAction />
                </div>

                <Button variant="contained" color='primary' onClick={handlerPagarClick}>Pagar</Button>

                <ModalControl open={open} onClose={onClose} width="300px">
                    <PaymentsCard onSelectedPaymentCard={handleSelectedPaymentCard} />
                </ModalControl>
            </div>
        </PaymentStyled>
    )
}


export default withState(Payment);