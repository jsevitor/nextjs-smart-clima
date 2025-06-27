import Image from "next/image";
import TabNavigation from "./components/TabNavigation";
import WeatherOverviewCard from "./components/weather/WeatherOverviewCard";
import WeatherTomorrowCard from "./components/weather/WeatherTomorrowCard";
import WeatherNextDaysCard from "./components/weather/WeatherNextDaysCard";
import MoonPhaseCard from "./components/weather/MoonPhaseCard";
import RainProbabilityChart from "./components/weather/RainProbabilityChart";
import RainAccumulatedChart from "./components/weather/RainAccumulatedChart";

export default function Home() {
  return (
    <main className="container mx-auto h-screen pt-24 flex flex-col gap-4">
      <TabNavigation />
      <div className="flex gap-4">
        <WeatherOverviewCard />
        <MoonPhaseCard />
      </div>
      <div className="flex gap-4">
        <WeatherTomorrowCard />
        <RainProbabilityChart />
        <RainAccumulatedChart />
      </div>
      <WeatherNextDaysCard />
    </main>
  );
}
