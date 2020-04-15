import React, { state } from 'react';
import styled from 'styled-components';

import VerticalTabs from '../../Controls/VerticalTabs'

const TestStyled = styled.div`
`;

const Test = () => {

    return (
        <TestStyled>
            <VerticalTabs />
        </TestStyled>        
    )
}

export default Test;