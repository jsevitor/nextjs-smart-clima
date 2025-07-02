"use client";
import { useEffect } from "react";
import { useWeatherStore } from "@/store/useWeatherStore";
import { getConditionIconUrl } from "@/utils/helpers";
import Image from "next/image";
import { weekdays } from "@/utils/resources";
import { WeatherOverviewCardSkeleton } from "../Skeletons";

export default function WeatherOverviewCard() {
  const { data, loading, lastCity, hasHydrated, fetchWeather } =
    useWeatherStore();

  useEffect(() => {
    if (!hasHydrated) return;
    fetchWeather(lastCity || "São Paulo");
  }, [hasHydrated]);

  if (loading || !data) return <WeatherOverviewCardSkeleton />;

  return (
    <div className="bg-borderColor w-full lg:w-2/3 lg:h-80 rounded-2xl p-4">
      {data ? (
        <div>
          <div className="flex justify-between border-b border-background pb-2">
            <div className="flex gap-2 items-center">
              <i className="bi bi-geo-alt-fill"></i>
              <span>{data.city}</span>
            </div>
            <div className="flex gap-2">
              <span>{weekdays[data.forecast[0].weekday]},</span>
              <span>{data.time}</span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center pt-4">
            <div className="flex justify-center w-full lg:w-1/2 mt-2">
              <div className="flex flex-col gap-4">
                <div className="flex gap-8 items-center">
                  <Image
                    src={getConditionIconUrl(data.condition_slug)}
                    alt={data.description}
                    width={120}
                    height={120}
                  />
                  <div>
                    <span className="text-8xl font-extrabold">
                      {data.temp}°
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold">{data.description}</span>
                  <div className="flex gap-4 mt-4 text-xl">
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
            <div className="flex justify-center w-full lg:w-1/2 mt-10 lg:mt-2">
              <div className="flex flex-col gap-2 w-4/5">
                <div className="flex justify-between border-b border-background pb-2">
                  <span>Chuva</span>
                  <span>{data.rain} mm</span>
                </div>
                <div className="flex justify-between border-b border-background pb-2">
                  <span>Vento</span>
                  <span>{data.wind_speedy}</span>
                </div>
                <div className="flex justify-between border-b border-background pb-2">
                  <span>Umidade</span>
                  <span>{data.humidity} %</span>
                </div>
                <div className="flex justify-between border-b border-background pb-2">
                  <span>Prob. de Chuva</span>
                  <span>{data.forecast[0].rain_probability} %</span>
                </div>
                <div className="flex justify-between border-b border-background pb-2">
                  <span>Nascer do Sol</span>
                  <span>{data.sunrise}</span>
                </div>
                <div className="flex justify-between ">
                  <span>Por do Sol</span>
                  <span>{data.sunset}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Nenhum dado disponível</p>
      )}
    </div>
  );
}
