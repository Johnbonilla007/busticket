import React, {useState} from 'react';
import {Button} from '@material-ui/core';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

import styled from 'styled-components';
import {ModalControl, TextFieldControl} from '../../Controls';


const PaymentStyled = styled.div`

    width: 400px;

    .col-2{
        display: grid;
        grid-template-columns: auto auto;
    }

    button {
        margin-top: 5px;
        width: 100%;
    }
`;


const PaymentControl = ({onRegisterPaymetCard}) => {
    const [paymentCard, setPaymentCard] = useState({
        number: '1234568989457710',
        name: 'Erlin Banegas',
        expiry: '2024',
        cvc:"1234",
        focus: 'name'
    });

    const handlePaymentCardChange = prop => value => {
        setPaymentCard({...paymentCard, [prop]: value});
    }

    const handlePaymentCardFocus = prop => e => {
        setPaymentCard({...paymentCard, focus: prop});
    }

    const handleRegisterPaymentCard = () => {
        onRegisterPaymetCard(paymentCard);
    }

    return (
            <PaymentStyled>

                <h2>Registro Tarjeta</h2>
                
                <Cards 
                    number={paymentCard.number}
                    name={paymentCard.name}
                    expiry={paymentCard.expiry}
                    cvc={paymentCard.cvc}
                    focused={paymentCard.focus}
                />

                <TextFieldControl 
                    label="Número" 
                    onChange={handlePaymentCardChange('number')} 
                    onFocus={handlePaymentCardFocus('number')}
                    maxLength={16}
                />

                <TextFieldControl 
                    label="Nombre" 
                    onChange={handlePaymentCardChange('name')} 
                    onFocus={handlePaymentCardFocus('name')}
                    maxLength={30}
                />

                <div className="col-2">
                    <TextFieldControl 
                        label="Fecha Expiración" 
                        onChange={handlePaymentCardChange('expiry')} 
                        onFocus={handlePaymentCardFocus('expiry')} 
                        maxLength={4}
                    />

                    <TextFieldControl 
                        label="CVC" 
                        onChange={handlePaymentCardChange('cvc')} 
                        onFocus={handlePaymentCardFocus('cvc')}
                        maxLength={4}
                    />
                </div>

                <Button variant="contained" color="primary" onClick={handleRegisterPaymentCard}>Registrar</Button>
            </PaymentStyled>
    )
}


export default PaymentControl;