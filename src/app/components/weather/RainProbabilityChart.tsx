import { useWeatherStore } from "@/store/useWeatherStore";
import RainProbabilityLineChart from "../charts/RainProbabilityChart";
import { ChartsSkeleton } from "../Skeletons";

export default function RainProbabilityChart() {
  const { data, loading } = useWeatherStore();

  if (loading) return <ChartsSkeleton />;
  if (!data) return <p>Nenhum dado disponível</p>;

  return (
    <div className="bg-borderColor w-full rounded-2xl p-4">
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="flex justify-center border-b border-background pb-2">
          <h2>Probabilidade de chuva</h2>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <RainProbabilityLineChart data={data} />
        </div>
      </div>
    </div>
  );
}
