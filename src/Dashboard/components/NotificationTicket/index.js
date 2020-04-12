import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NotificationTicketStyled = styled.div`
    position: fixed;
    right: 0px;
    bottom: 0px;
    width: 400px;
    height: 200px;

    display: grid;
    justify-content: center;

    border: solid 1px gray;

    strong {
        font-size: 30px;
        color: gray;
    }

    span {
        font-size: 36px;
        color: #ffffff;
    }

    .center-hour {
        display: grid;
        justify-content: center;
    }
`;

const ticket = {
    origen: 'Central Metropolitana',
    destination: 'La Ceiba',
    output: '20:15 AM',
    final: '6:30 AM',
    transport: 'A-31',
    capacity: 52,
    available: 10,
    // bus: transportImg.bus1,
};

const getOutputHour = () => {
    const output = ticket.output.substring(0, ticket.output.length - 2);

    const time = output.split(':');

    const hourOuput = parseInt(time[0]);
    const minutesOutput = parseInt(time[1]);

    const currentDate = new Date();

    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();

    let diffHour = hourOuput - currentHour;
    let diffMinute = minutesOutput - currentMinutes;

    if (diffMinute < 0) {
        diffHour--;
        diffMinute = 60 + diffMinute;
    }

    let hours = diffHour.toString();
    let minutes = diffMinute.toString();

    if (hours.length < 2) {
        hours = "0" + hours;
    }

    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }

    return `${hours} : ${minutes}`;
}


const NotificationTicket = () => {
    const [diffTime, setDiffTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            const outputTime = getOutputHour();

            setDiffTime(outputTime);
        }, 500)
    }, []);

    return (
        <NotificationTicketStyled>
            <div>
                <strong>Destination: </strong>
                <span>{ticket.destination}</span>
            </div>

            <div className="center-hour" >
                <strong>Time Remaining</strong>
                <span className="center-hour">{diffTime}</span>
            </div>
        </NotificationTicketStyled>
    )
}

export default NotificationTicket;