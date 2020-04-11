import React, {useState} from 'react';
import styled from 'styled-components';

import { TextFieldControl } from '../../../../Controls';
import ScheduleItem from './ScheduleItem';

const SheduleStyled = styled.div`
    display: grid;
    grid-template-rows: 80px calc(100% - 80px);
    height: 100%;

    .container-overflow {
        overflow: auto;
        position: relative;
    }

    .cards-container {
        position: absolute;
        left: 0px;
        right: 0px;
        display: grid;
        grid-template-columns: repeat(auto-fit, 360px);
        grid-row-gap: 10px;
        align-items: center;
        justify-content: center;
    }
`;

const Schedule = ({schedulers, onSelectedItem}) => {
    const [schedulersState, setSchedulersState] = useState(schedulers);

    const handleSearchScheduleChange = value => {
        if(!value){
            setSchedulersState(schedulers);
            return;
        }

        const schedulersFound = schedulers.filter(item => item.name.toUpperCase().includes(value.toUpperCase()));

        setSchedulersState(schedulersFound);
    }

    return (
        <SheduleStyled>
            <TextFieldControl label="Search Scheduler" onChange={handleSearchScheduleChange} />

            <div className="container-overflow">
                <div className="cards-container">
                    {schedulers.map(item => <ScheduleItem item={item} onClick={onSelectedItem} />)}
                </div>
            </div>
        </SheduleStyled>
    )
}

export default Schedule;