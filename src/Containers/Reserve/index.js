import React, {useState} from 'react';
import styled from 'styled-components';
import { TextFieldControl } from '../../Controls';
import Payment from '../Payment';

const ReserveStyled = styled.div``;

const Reserve = () => {
    const [client, setClient] = useState({
        name: "Erlin Banegas",
        genero: 'M',
        age: 24,
        celular: '99155949',
        direction: 'Villanueva',
        email: 'sbanegas3196@gmail.com'
    });

    return (
        <ReserveStyled>
            <TextFieldControl label="Identidad" />
            <div>
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
            </div>


            <Payment open onClose={() => {}} />
        </ReserveStyled>
    )
}


export default Reserve;