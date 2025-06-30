import { useWeatherStore } from "@/store/useWeatherStore";

export default function WeatherNextDaysCard() {
  const { data, loading } = useWeatherStore();

  const forecastData = data?.forecast;

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="bg-borderColor w-2/3 h-80 rounded-2xl p-4">
      <div className="flex justify-between gap-2 h-full">
        {forecastData?.slice(0, 7).map((item, index) => (
          <div
            key={index}
            className="w-32 flex flex-col gap-4 justify-between items-center bg-background rounded-2xl p-2"
          >
            <span className="w-full border-b border-borderColor pb-2 font-bold text-center">
              {item.weekday}
            </span>
            <span className="text-sm">{item.date}</span>
            <i className="bi bi-cloud-sun text-5xl"></i>
            <span className="text-sm text-center">{item.description}</span>
            <div className="flex flex-col gap-2">
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
