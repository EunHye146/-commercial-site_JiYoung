import React, { useState } from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import NoticeCont from '../components/Notice/NoticeCont';
import Events from '../components/Notice/Events';

const Wrapper = styled(Responsive)`
    padding-top : 4rem;
`;

const Cate = styled.div`
    padding-top : 40px;
    padding-bottom : 10px;
    #noti {
        margin-right : 40px;
        font-weight : 900;
        cursor : pointer;
        font-size : 18px;
    }
    #event {
        cursor : pointer;
        font-weight : 100;
        font-size : 15px;
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
        document.getElementById("noti").style.fontSize = "18px";
        document.getElementById("event").style.fontWeight = "100";
        document.getElementById("event").style.fontSize = "15px";
    };

    const showEvent = () => {
        setNoti(false);
        setEvent(true);
        document.getElementById("event").style.fontWeight = "900";
        document.getElementById("event").style.fontSize = "18px";
        document.getElementById("noti").style.fontWeight = "100";
        document.getElementById("noti").style.fontSize = "15px";
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
            { noti && <NoticeCont/>}
            { event && <Events/>}
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Notice;