import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface RainAccumulationChartProps {
  data: {
    forecast: {
      date: string;
      rain: number;
    }[];
  };
}

export default function RainAccumulationChart({
  data,
}: RainAccumulationChartProps) {
  const chartData =
    data?.forecast?.map((forecast) => ({
      date: forecast.date,
      rain: forecast.rain,
    })) || [];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={chartData}
        margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={{ fill: "#aeaeae", fontSize: 12 }} />
        <YAxis tick={{ fill: "#aeaeae", fontSize: 12 }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="rain"
          name="Acumulado de Chuva (mm)"
          stroke="var(--min)"
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
