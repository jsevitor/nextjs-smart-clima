import { useWeatherStore } from "@/store/useWeatherStore";
import { moonPhases } from "@/utils/resources";

export default function MoonPhaseCard() {
  const { data, loading } = useWeatherStore();

  const forecastData = data?.forecast;

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="bg-borderColor w-1/3 rounded-2xl h-80 p-4">
      {data ? (
        <div className="flex flex-col justify-between gap-4 h-full">
          <div className="flex justify-center border-b border-background pb-2">
            <h2>Fase da Lua</h2>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center">
            <i className="bi bi-moon-stars text-7xl"></i>
            <span>{moonPhases[data.moon_phase]}</span>
          </div>
          <div className="flex justify-center gap-4">
            {forecastData?.slice(0, 7).map((item, index) => (
              <div className="flex flex-col items-center">
                <i key={index} className="bi bi-moon-fill text-2xl"></i>
                <span className="text-xs text-center">
                  {moonPhases[item.moon_phase]}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Erro ao carregar</p>
      )}
    </div>
  );
}
