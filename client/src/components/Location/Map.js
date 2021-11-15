/*global kakao*/ 
import React, { useEffect } from 'react'
import styled from 'styled-components';
import './Map.css';
import Fade from 'react-reveal/Fade';

const Spacer = styled.div`
  height : 3.5rem;
`;

const Wrapper = styled.div`
  text-align : center;
  margin-top : 45px;
  margin-bottom : 115px;
`;

const Title = styled.div`
  font-size : 25px;
  font-weight : bold;
  margin-top : 45px;
  margin-bottom : 45px;
  text-align : center;
`;

const TextWrapper = styled.div`
  position : relative;
  width : 385px;
  height : 400px;
  display : inline-block;
  margin-left : 15px;
  background : #fffefa;
  border-radius : 10px;
  box-shadow : 3px 3px 3px 3px #d9d7cc;
  @media screen and (max-width: 768px) {
    width : 90%;
    margin-left : 0;
  }
`;

const Text = styled.div`
  position : absolute;
  width : 250px;
  left : 50%;
  top : 50%;
  transform : translate(-50%, -50%);
  text-align : left;
  padding-bottom : 20px;
  margin : auto;
`;

const Div = styled.div`
  width : 500px;
  height : 400px;
  display : inline-block;
  @media screen and (max-width: 768px) {
    width : 90%;
  }
`;

const Hr = styled.hr`
  width : 250px;
  display : block;
`;

const Map = () => {

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.732904627259146, 126.75085892642353),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.732904627259146, 126.75085892642353); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

  var iwContent = '<div id="infobox">조아 스터디<br><a id="link" href="https://map.kakao.com/link/to/Hello World!,37.732904627259146,126.75085892642353" target="_blank">길찾기</a></div>',
    iwPosition = new kakao.maps.LatLng(37.732904627259146, 126.75085892642353); //인포윈도우 표시 위치입니다

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent  
  });
  
  // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
  infowindow.open(map, marker); 

    }, [])


    return (
      <>
        <Spacer/>
        <Title><Fade left><Hr/></Fade><Fade delay={400}>위치</Fade><Fade right><Hr/></Fade></Title>
        <Fade delay={500}>
        <Wrapper>
        <Div id="map"></Div>
        <TextWrapper>
          <Text>
            <h3>전화번호</h3>
            010-8661-0052
            <h3>주소</h3>
            경기도 파주시 미래로 622 대흥프라자 401,402호
          </Text>
        </TextWrapper>
        </Wrapper>
        </Fade>
      </>
    )
}

export default Map;