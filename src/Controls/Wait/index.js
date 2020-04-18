import React from 'react';

import { CircularProgress } from '@material-ui/core';

import './wait.css';

const WaitControl = () => {
    
    return (
        <div className="wait-container" id="wait-control">
            <div>
                <CircularProgress color="secondary" />
                <h2>Espera...</h2>
            </div>
        </div>
    )
}

export default WaitControl;