"use client";

import TabNavigation from "./components/TabNavigation";
import WeatherOverviewCard from "./components/weather/WeatherOverviewCard";
import WeatherTomorrowCard from "./components/weather/WeatherTomorrowCard";
import WeatherNextDaysCard from "./components/weather/WeatherNextDaysCard";
import MoonPhaseCard from "./components/weather/MoonPhaseCard";
import RainProbabilityChart from "./components/weather/RainProbabilityChart";
import RainAccumulatedChart from "./components/weather/RainAccumulatedChart";
import { useState } from "react";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("today");

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
        <div className="w-2/3 bg-borderColor rounded-2xl p-4">
          <p>soon</p>
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <RainProbabilityChart />
          <RainAccumulatedChart />
        </div>
      </div>
    </main>
  );
}
