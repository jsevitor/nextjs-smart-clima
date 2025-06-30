"use client";
import { useEffect } from "react";
import { useWeatherStore } from "@/store/useWeatherStore";

export default function WeatherOverviewCard() {
  const { data, loading, fetchWeather } = useWeatherStore();

  useEffect(() => {
    // fetchWeather("São Paulo");
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="bg-borderColor w-2/3 h-80 rounded-2xl p-4">
      {data ? (
        <div>
          <div className="flex justify-between border-b border-background pb-2">
            <div className="flex gap-2 items-center">
              <i className="bi bi-geo-alt-fill"></i>
              <span>{data.city}</span>
            </div>
            <div className="flex gap-2">
              <span>{data.forecast[0].weekday}</span>
              <span>{data.time}</span>
            </div>
          </div>
          <div className="flex items-center pt-4">
            <div className="flex justify-center w-1/2 mt-2">
              <div className="flex flex-col gap-4">
                <div className="flex gap-8 items-center">
                  <i className="bi bi-cloud-sun text-7xl"></i>
                  <div className="">
                    <span className="text-8xl font-extrabold">
                      {data.temp}°
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold">{data.description}</span>
                  <div className="flex gap-4 mt-4">
                    <span className="font-semibold">
                      <i className="bi bi-arrow-down"></i>
                      {data.forecast[0].min}°C
                    </span>
                    <span className="font-semibold">
                      <i className="bi bi-arrow-up"></i>
                      {data.forecast[0].max}°C
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-1/2 mt-2">
              <div className="flex flex-col gap-2 w-4/5">
                <div className="flex justify-between border-b border-background pb-2">
                  <span className="">Chuva</span>
                  <span className="">{data.rain} mm</span>
                </div>
                <div className="flex justify-between border-b border-background pb-2">
                  <span className="">Vento</span>
                  <span className="">{data.wind_speedy}</span>
                </div>
                <div className="flex justify-between border-b border-background pb-2">
                  <span className="">Umidade</span>
                  <span className="">{data.humidity} %</span>
                </div>
                <div className="flex justify-between border-b border-background pb-2">
                  <span className="">Prob. de Chuva</span>
                  <span className="">
                    {data.forecast[0].rain_probability} %
                  </span>
                </div>
                <div className="flex justify-between border-b border-background pb-2">
                  <span className="">Nascer do Sol</span>
                  <span className="">{data.sunrise}</span>
                </div>
                <div className="flex justify-between ">
                  <span className="">Por do Sol</span>
                  <span className="">{data.sunset}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Erro ao carregar</p>
      )}
    </div>
  );
}
