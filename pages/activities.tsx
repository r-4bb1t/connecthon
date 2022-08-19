import type { NextPage } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Home: NextPage = () => {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=8df22b487d92665d05f48993ae24f355&autoload=false`;

    document.head.appendChild(mapScript);

    let lat = 33.450701,
      lng = 126.570667;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
      });
    }

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);
  return (
    <Layout>
      <Map id="map"></Map>
    </Layout>
  );
};

export default Home;

const Map = styled.div`
  width: 100%;
  height: 100%;
`;
