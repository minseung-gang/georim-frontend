import React, { useEffect, useState } from "react";
import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
  Polygon,
} from "react-kakao-maps-sdk";

type CoordinatesType = {
  center: {
    lat: number;
    lng: number;
  };
  bounds: {
    lat: number;
    lng: number;
  }[];
};

function KaKaoMap({ coordinates }: { coordinates: CoordinatesType }) {
  const { center, bounds } = coordinates;
  const [latitude, setLatitude] = useState<number>(center.lat);
  const [longitude, setLongitude] = useState<number>(center.lng);

  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (!latitude || !longitude) return;

    const container: any = document.getElementById("map");
    const mapOptions = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: 1,
    };

    const createdMap = new window.kakao.maps.Map(container, mapOptions);
    setMap(createdMap);
  }, [latitude, longitude]);

  return (
    <div>
      <Map
        id="map"
        center={{ lat: latitude, lng: longitude }}
        zoomable={false}
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "5px",
        }}
      >
        <MapTypeControl position={"TOPRIGHT"} />
        <ZoomControl position={"RIGHT"} />
        <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
        <Polygon
          path={bounds.map((coord) => ({
            lat: coord.lat,
            lng: coord.lng,
          }))}
          strokeWeight={3} // 선의 두께입니다
          strokeColor={"#39DE2A"} // 선의 색깔입니다
          strokeOpacity={0.8} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={"longdash"} // 선의 스타일입니다
          fillColor={"#A2FF99"} // 채우기 색깔입니다
          fillOpacity={0.7} // 채우기 불투명도 입니다
        />
      </Map>
    </div>
  );
}

export default KaKaoMap;
