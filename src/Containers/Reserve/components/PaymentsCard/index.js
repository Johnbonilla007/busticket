import React, { useState } from 'react';
import styled from 'styled-components';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

import { Card, CardActionArea, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ModalControl } from '../../../../Controls';
import { utils } from '../../../../utils';
import PaymentControl from '../../../Payment';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const CardsPaymentStyled = styled.div`
    
    .container-cards {
        display: grid;
        grid-template-rows: repeat(auto-fit, 200px);
        grid-row-gap: 10px;
    }
`;

const cards = [
    {
        number: '1234568989457710',
        name: 'Erlin Banegas',
        expiry: '2024',
        cvc: "1234",
        focus: 'name'
    },
    {
        number: '5234568989457710',
        name: 'Erlin Banegas',
        expiry: '2024',
        cvc: "1234",
        focus: 'name'
    },
    {
        number: '4565454645612324',
        name: 'Erlin Banegas',
        expiry: '2024',
        cvc: "4561",
        focus: 'name'
    },
];

const PaymentsCard = ({ onSelectedPaymentCard }) => {
    const [paymentsCard, setPaymentsCard] = useState(cards);
    const [openRegisterCard, setOpenRegisterCard] = useState(false);
    const classes = useStyles();

    const handleRegisterCardModalClick = () => {
        setOpenRegisterCard(!openRegisterCard);
    }

    const handleSelectedPaymentCard = paymentCard => {
        onSelectedPaymentCard(paymentCard);
    }

    const handleRegisterPaymentCard = paymentCard => {
        setPaymentsCard([...paymentsCard, paymentCard]);
        handleRegisterCardModalClick();
    }

    const handleCancelarClick = () => {
        onSelectedPaymentCard(null);
    }

    return (
        <CardsPaymentStyled>
            <div className="container-cards">
                {utils.evaluateArray(paymentsCard) ? (
                    paymentsCard.map(paymentCard =>
                        <Card className={classes.root} onClick={() => handleSelectedPaymentCard(paymentCard)}>
                            <CardActionArea>
                                <Cards
                                    number={paymentCard.number}
                                    name={paymentCard.name}
                                    expiry={paymentCard.expiry}
                                    cvc={paymentCard.cvc}
                                    focused="name"
                                />
                            </CardActionArea>
                        </Card>
                    )
                ) : (
                        <Button onClick={handleRegisterCardModalClick}> Register Card </Button>
                    )}
            </div>

            {utils.evaluateArray(paymentsCard) ? (
                <div>
                    <Button onClick={handleCancelarClick}> Cancelar </Button>
                </div>
                ) : null
            }

            <ModalControl open={openRegisterCard} onClose={handleRegisterCardModalClick} width="300px">
                <PaymentControl onRegisterPaymetCard={handleRegisterPaymentCard} />
            </ModalControl>
        </CardsPaymentStyled>
    )
}

export default PaymentsCard;