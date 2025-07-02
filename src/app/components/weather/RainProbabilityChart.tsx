import { useWeatherStore } from "@/store/useWeatherStore";
import RainProbabilityLineChart from "../charts/RainProbabilityChart";
import { ChartsSkeleton } from "../Skeletons";

export default function RainProbabilityChart() {
  const { data, loading } = useWeatherStore();

  if (loading || !data) return <ChartsSkeleton />;
  return (
    <div className="bg-borderColor w-full rounded-2xl p-4">
      {data ? (
        <div className="flex flex-col justify-between gap-4 h-full">
          <div className="flex justify-center border-b border-background pb-2">
            <h2 className="font-bold">Probabilidade de chuva</h2>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <RainProbabilityLineChart data={data} />
          </div>
        </div>
      ) : (
        <p>Nenhum dado disponível</p>
      )}
    </div>
  );
}
