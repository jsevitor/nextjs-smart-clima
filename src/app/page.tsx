"use client";

import { useEffect, useState } from "react";
import TabNavigation from "./components/TabNavigation";
import WeatherOverviewCard from "./components/weather/WeatherOverviewCard";
import WeatherTomorrowCard from "./components/weather/WeatherTomorrowCard";
import WeatherNextDaysCard from "./components/weather/WeatherNextDaysCard";
import MoonPhaseCard from "./components/weather/MoonPhaseCard";
import RainProbabilityChart from "./components/weather/RainProbabilityChart";
import RainAccumulatedChart from "./components/weather/RainAccumulatedChart";
import dynamic from "next/dynamic";
import { useWeatherStore } from "@/store/useWeatherStore";

const WeatherMap = dynamic(() => import("@/app/components/WeatherMap"), {
  ssr: false,
});

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("today");
  const [coords, setCoords] = useState<[number, number]>([-23.55, -46.63]);
  const { data, lastCity, fetchCoordsByCity, hasHydrated } = useWeatherStore();

  useEffect(() => {
    if (!hasHydrated) return;

    const loadCoords = async () => {
      if (lastCity) {
        const result = await fetchCoordsByCity(lastCity);
        if (result) {
          setCoords([result.lat, result.lon]);
        }
      }
    };

    loadCoords();
  }, [lastCity, hasHydrated]);

  return (
    <main className="container mx-auto h-screen pt-24 flex flex-col gap-4">
      <TabNavigation
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="flex gap-4">
        {selectedTab === "today" && <WeatherOverviewCard />}
        {selectedTab === "tomorrow" && <WeatherTomorrowCard />}
        {selectedTab === "nextDays" && <WeatherNextDaysCard />}
        <MoonPhaseCard />
      </div>
      <div className="flex gap-4">
        <div className="w-2/3 bg-borderColor rounded-2xl">
          <WeatherMap
            center={coords}
            city={lastCity || "São Paulo"}
            description={data?.description}
          />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <RainProbabilityChart />
          <RainAccumulatedChart />
        </div>
      </div>
    </main>
  );
}
