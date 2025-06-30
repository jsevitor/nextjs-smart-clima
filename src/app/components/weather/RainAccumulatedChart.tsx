// src/app/components/weather/RainAccumulatedChart.tsx
import { useWeatherStore } from "@/store/useWeatherStore";
import RainAccumulationChart from "../charts/RainAccumulationChart";

export default function RainAccumulatedChart() {
  const { data, loading } = useWeatherStore();

  if (loading) return <p>Carregando...</p>;
  if (!data) return <p>Nenhum dado disponível</p>;

  return (
    <div className="bg-borderColor w-full rounded-2xl p-4">
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="flex justify-center border-b border-background pb-2">
          <h2>Acumulado de chuva</h2>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <RainAccumulationChart data={data} />
        </div>
      </div>
    </div>
  );
}
