import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height : 300px;
    margin-top : 5rem;
`;

const Title = styled.div`
    font-size : 20px;
    font-weight : bold;
    margin : 1rem;
    text-decoration : underline;
`;

function MainAbout() {
    return (
        <>
        <Wrapper>
            <Title>
                about us
            </Title>
        </Wrapper>
        </>
    );
}

export default MainAbout;