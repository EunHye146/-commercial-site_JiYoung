import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const Wrapper = styled(Responsive)`
    background : lightgray;
    height : 500px;
    margin-bottom : 30px;
`;

function Events() {
    
    return (
        <>
       <Wrapper>events</Wrapper>
        </>
    );
}

export default Events;