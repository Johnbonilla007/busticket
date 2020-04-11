import React, { useState } from 'react';
import styled from 'styled-components';
import PaymentControl from '../../../Payment';
import Client from './Client';
import ScheduleItem from '../Schedule/ScheduleItem';
import PaymentsCard from '../PaymentsCard';
import {Button} from '@material-ui/core';

import { green } from '@material-ui/core/colors';
import {ModalControl} from '../../../../Controls';

const PaymentStyled = styled.div``;

const Payment = ({client, ticket, history}) => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    }

    const handlerPagarClick = () => {
        setOpen(true);
    }

    const handleSelectedPaymentCard = paymentCard => {
        history.push('../home');
        onClose();
    }

    return (
        <PaymentStyled>
            {/* <TextFieldControl label="Identidad" /> */}
            <Client client={client} />

            <h2>Destination</h2>
            <ScheduleItem item={ticket} onClick={() => {}} showAction />

            <Button variant="contained" color='primary' onClick={handlerPagarClick}>Pagar</Button>

            <ModalControl open={open} onClose={onClose} width="300px">
                <PaymentsCard onSelectedPaymentCard={handleSelectedPaymentCard} />
            </ModalControl>
        </PaymentStyled>
    ) 
}


export default Payment;