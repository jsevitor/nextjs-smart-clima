import { useWeatherStore } from "@/store/useWeatherStore";
import { getMoonPhaseIconUrl } from "@/utils/helpers";
import { moonPhases } from "@/utils/resources";
import Image from "next/image";
import { MoonPhaseCardSkeleton } from "../Skeletons";

export default function MoonPhaseCard() {
  const { data, loading } = useWeatherStore();

  const forecastData = data?.forecast;

  if (loading || !forecastData) return <MoonPhaseCardSkeleton />;

  return (
    <div className="bg-borderColor w-full lg:w-1/3 rounded-2xl lg:h-80 p-4">
      {data ? (
        <div className="flex flex-col justify-between gap-4 h-full">
          <div className="flex justify-center border-b border-background pb-2">
            <h2 className="font-bold">Fase da Lua</h2>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src={getMoonPhaseIconUrl(data.moon_phase)}
              alt={data.description}
              width={120}
              height={120}
            />
            <span className="font-semibold">{moonPhases[data.moon_phase]}</span>
          </div>
          <div className="flex justify-center lg:justify-between gap-2 md:gap-12 lg:gap-4 md:mt-8 lg:mt-0">
            {forecastData?.slice(0, 7).map((item, index) => (
              <div className="flex flex-col items-center" key={index}>
                <Image
                  src={getMoonPhaseIconUrl(item.moon_phase)}
                  alt={item.moon_phase}
                  width={40}
                  height={40}
                  title={moonPhases[item.moon_phase]}
                />
                <span className="text-xs text-center">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Nenhum dado disponível</p>
      )}
    </div>
  );
}
