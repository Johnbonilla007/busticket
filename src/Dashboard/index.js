import React, { useState } from 'react';
import styled from 'styled-components';

import Cards from '../Controls/Cards';
import { routes } from '../routes';
import { utils } from '../utils';
import { ModalControl } from '../Controls';
import NotificationTicket from './components/NotificationTicket';
import MenuScreen from '../Controls/MenuScreen';
import withState from '../Store/withState';

const DashboardStyled = styled.div`
    opacity: 90%;
    display: grid;
`;

const Dashboard = ({ history, match, state }) => {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState({});
    
    const selectedItem = item => {
        if (item.showInModal) {
            setItem({ ...item, Component: item.component });
            setOpen(true);
            return;
        }

        history.push(item.path);
    }

    const handleOpenOnClick = () => {
        setOpen(false);
    }

    const getComponent = () => {


        return React.createElement(item.Component);
    };

    const renderModule = () => {

    }

    const width = history.location.pathname === '/home' ? 300 : 200;
    const height = history.location.pathname === '/home' ? 200 : 120;

    const authorizedScreens = routes.filter(route => state.user.accesos.some(name => name === route.name));

    return <DashboardStyled>
        <Cards items={authorizedScreens} onRenderItem={renderModule} onClick={selectedItem} />

        {/* <MenuScreen width={width} height={height} /> */}

        {/* <NotificationTicket /> */}

        {/* <ModalControl
                    open={open}
                    onClose={handleOpenOnClick}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {utils.evaluateObject(item) && <div>{getComponent()}</div>}
                </ModalControl> */}
    </DashboardStyled>
}

export default withState(Dashboard);