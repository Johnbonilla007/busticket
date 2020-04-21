import React, { useState } from 'react';
import styled from 'styled-components';
import { TextFieldControl } from '../../Controls';
import Payment from './components/Payment';
import StepperControl from '../../Controls/StepperControl';
import Destinations from './components/Destinations';
import Schedule from './components/Schedule';
import { destinationsData } from './components/Destinations/settings';
import { utils } from '../../utils';

const ReserveStyled = styled.div`
    display: grid;
`;

const Reserve = ({ history }) => {
    const [client, setClient] = useState({
        name: "Erlin Banegas",
        genero: 'M',
        age: 24,
        celular: '99155949',
        direction: 'Villanueva',
        email: 'sbanegas3196@gmail.com'
    });

    const [open, setOpen] = useState(true);
    const [selectedDestinationItem, setSelectedDestinationItem] = useState({});
    const [selectedScheduleItem, setSelectedScheduleItem] = useState({});
    const [activeStep, setActiveStep] = useState(0);

    const handleSelectedItemClick = destinationItem => {
        setSelectedDestinationItem(destinationItem);

        setActiveStep(activeStep + 1);
    }

    const handleSelectedScheduleItemClick = scheduleItem => {
        setSelectedScheduleItem(scheduleItem);
        setActiveStep(activeStep + 1);
    }

    const handleControlStep = index => {
        if (index < activeStep) {
            setActiveStep(index);
        }

        if (utils.evaluateObject(selectedDestinationItem)) {
            setActiveStep(index);
        }
    }

    return (
        <ReserveStyled>


            {/* <StepperControl steps={[{step: 'Selecciona un Destino', component: <Destinations />}]} steps={['Selecciona un Destino', 'Horarios', 'Create an ad']} /> */}

            <StepperControl steps=
                {
                    [
                        {
                            step: 'Selecciona un Destino',
                            component: <Destinations data={destinationsData} onSelectedItem={handleSelectedItemClick} />
                        },
                        {
                            step: 'Selecciona un Horario',
                            component: <Schedule selectedDestinationItem={selectedDestinationItem} onSelectedItem={handleSelectedScheduleItemClick} />
                        },
                        {
                            step: 'Resumen',
                            component: <Payment
                                            history={history}
                                            selectedDestinationItem={selectedDestinationItem}
                                            ticket={selectedScheduleItem} 
                                        />
                        },
                    ]
                }

                manual
                onControl={handleControlStep}
                activeStep={activeStep}
                showControl
            />

            {/* <Destinations /> */}
        </ReserveStyled>
    )
}


export default Reserve;