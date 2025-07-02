"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const { BaseLayer, Overlay } = LayersControl;

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

interface WeatherMapProps {
  center: [number, number];
  city: string;
  description?: string;
}

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

type MapFocusUpdaterProps = {
  center: [number, number];
};

function MapFocusUpdater({ center }: MapFocusUpdaterProps) {
  const map = useMap();

  useEffect(() => {
    // map.setView(center, map.getZoom());
    // map.flyTo(center, map.getZoom());
  }, [center, map]);

  return null;
}

export default function WeatherMap({
  center,
  city,
  description,
}: WeatherMapProps) {
  return (
    <div className="w-full h-[450px] lg:h-full rounded-2xl overflow-hidden border border-borderColor">
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <MapFocusUpdater center={center} />
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>

          <Overlay checked name="Radar de Chuva (Precipitação)">
            <TileLayer
              url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              attribution='Map data © <a href="https://openweathermap.org/">OpenWeatherMap</a>'
              opacity={0.5}
            />
          </Overlay>

          <Overlay name="Nuvens">
            <TileLayer
              url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              attribution='Map data © <a href="https://openweathermap.org/">OpenWeatherMap</a>'
              opacity={0.5}
            />
          </Overlay>

          <Overlay name="Temperatura">
            <TileLayer
              url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              attribution='Map data © <a href="https://openweathermap.org/">OpenWeatherMap</a>'
              opacity={0.5}
            />
          </Overlay>
        </LayersControl>

        <Marker position={center}>
          <Popup>
            <strong>{city}</strong> <br /> {description}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
