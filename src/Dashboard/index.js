import React from 'react';
import Cards from '../Controls/Cards';
import { routes } from '../routes';

const Dashboard = ({history, match}) => {
    const selectedItem = item => {
        history.push(item.path);
    }
    
    return <Cards items={routes} onClick={selectedItem} />
}

export default Dashboard;