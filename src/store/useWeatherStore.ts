import { getWeatherByCity } from "@/services/weatherService";
import { create } from "zustand";

type ForecastDay = {
  date: string;
  full_date: string;
  weekday: string;
  max: number;
  min: number;
  humidity: number;
  cloudiness: number;
  rain: number;
  rain_probability: number;
  wind_speedy: string;
  sunrise: string;
  sunset: string;
  moon_phase: string;
  description: string;
  condition: string;
};

type Weather = {
  temp: number;
  date: string;
  time: string;
  description: string;
  city: string;
  humidity: number;
  rain: number;
  wind_speedy: string;
  wind_cardinal: string;
  sunrise: string;
  sunset: string;
  moon_phase: string;
  condition_slug: string;
  forecast: ForecastDay[];
};

type WeatherStore = {
  data: Weather | null;
  loading: boolean;
  fetchWeather: (city: string) => Promise<void>;
};

export const useWeatherStore = create<WeatherStore>((set) => ({
  data: null,
  loading: false,

  fetchWeather: async (city: string) => {
    set({ loading: true });
    try {
      const data = await getWeatherByCity(city);
      set({ data: data.results, loading: false });
    } catch (err) {
      console.error(err);
      set({ loading: false });
    }
  },
}));
