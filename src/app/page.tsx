import Image from "next/image";
import TabNavigation from "./components/TabNavigation";
import WeatherOverviewCard from "./components/weather/WeatherOverviewCard";
import WeatherTomorrowCard from "./components/weather/WeatherTomorrowCard";
import WeatherNextDaysCard from "./components/weather/WeatherNextDaysCard";

export default function Home() {
  return (
    <main className="container mx-auto h-screen pt-24 flex flex-col gap-4">
      <TabNavigation />
      <WeatherOverviewCard />
      <WeatherTomorrowCard />
      <WeatherNextDaysCard />
    </main>
  );
}
