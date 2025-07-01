import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getWeatherByCity } from "@/services/weatherService";

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
  lastCity: string | null;
  fetchWeather: (city: string) => Promise<void>;
};

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set, get) => ({
      data: null,
      loading: false,
      lastCity: null,

      fetchWeather: async (city: string) => {
        const currentCity = get().lastCity;
        if (currentCity === city) return;

        set({ loading: true });
        try {
          const data = await getWeatherByCity(city);
          set({ data: data.results, lastCity: city, loading: false });
        } catch (err) {
          console.error(err);
          set({ loading: false });
        }
      },
    }),
    {
      name: "weather-store",
      partialize: (state) => ({ lastCity: state.lastCity }),
    }
  )
);
