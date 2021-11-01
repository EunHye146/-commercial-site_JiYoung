import React, { useState } from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

const Wrapper = styled(Responsive)`
    padding-top : 4rem;
`;

const Cate = styled.div`
    padding-top : 40px;
    padding-bottom : 10px;
    font-size : 20px;
    #noti {
        margin-right : 40px;
        font-weight : 900;
        cursor : pointer;
    }
    #event {
        cursor : pointer;
        font-weight : 100;
    }
    #noti:hover, #event:hover {
        color : gray;
    }
`;

function Notice() {
    const [noti, setNoti] = useState(true);
    const [event, setEvent] = useState(false);
    const showNoti = () => {
        setEvent(false);
        setNoti(true);
        document.getElementById("noti").style.fontWeight = "900";
        document.getElementById("event").style.fontWeight = "100";
    };

    const showEvent = () => {
        setNoti(false);
        setEvent(true);
        document.getElementById("event").style.fontWeight = "900";
        document.getElementById("noti").style.fontWeight = "100";
    };
    return (
        <>
            <Header/>
            <Wrapper>
            <Cate>
                <span id="noti" onClick={showNoti}>공지사항</span>
                <span id="event" onClick={showEvent}>EVENT</span>
            </Cate>
            <hr/>
            { noti && <div>noti~</div>}
            { event && <div>event~</div>}
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Notice;