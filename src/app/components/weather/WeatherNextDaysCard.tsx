import { useWeatherStore } from "@/store/useWeatherStore";
import { getConditionIconUrl } from "@/utils/helpers";
import Image from "next/image";
import { WeatherNextDaysCardSkeleton } from "../Skeletons";

export default function WeatherNextDaysCard() {
  const { data, loading } = useWeatherStore();

  const forecastData = data?.forecast;

  if (loading) return <WeatherNextDaysCardSkeleton />;

  return (
    <div className="bg-borderColor w-full lg:w-2/3 lg:h-80 rounded-2xl p-4">
      <div className="flex flex-col lg:flex-row justify-between gap-2 lg:h-full">
        {forecastData?.slice(0, 7).map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-24 2xl:w-32 flex lg:flex-col justify-between gap-3 items-center bg-background rounded-2xl px-4 py-2 lg:p-2"
          >
            <span className="border-r lg:border-b border-borderColor pr-4 lg:pb-2 font-bold text-center">
              {item.weekday}
            </span>
            <span className="text-sm">{item.date}</span>
            {/* <Image
              src={getConditionIconUrl(item.condition)}
              alt={item.description}
              width={60}
              height={60}
            /> */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20">
              <Image
                src={getConditionIconUrl(item.condition)}
                alt={item.description}
                fill
                className="object-contain"
              />
            </div>

            <span className="text-sm text-center">{item.description}</span>
            <div className="flex flex-col gap-1 mt-2 text-sm lg:text-normal">
              <span className="font-semibold text-center">
                <i className="bi bi-arrow-down"></i>
                {item.min}°C
              </span>
              <span className="font-semibold text-center">
                <i className="bi bi-arrow-up"></i>
                {item.max}°C
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
