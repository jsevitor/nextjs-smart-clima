import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getWeatherByCity, getCoordsByCity } from "@/services/weatherService";

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

type Coords = {
  [city: string]: { lat: number; lon: number };
};

type WeatherStore = {
  data: Weather | null;
  loading: boolean;
  lastCity: string | null;
  hasHydrated: boolean;
  coords: Coords;
  fetchWeather: (city: string) => Promise<void>;
  fetchCoordsByCity: (
    city: string
  ) => Promise<{ lat: number; lon: number } | undefined>;
  setHasHydrated: (state: boolean) => void;
};

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set, get) => ({
      data: null,
      loading: false,
      lastCity: null,
      hasHydrated: false,
      coords: {},

      fetchWeather: async (city: string) => {
        set({ loading: true });
        try {
          const data = await getWeatherByCity(city);
          set({ data: data.results, lastCity: city, loading: false });
        } catch (err) {
          console.error(err);
          set({ loading: false });
        }
      },

      fetchCoordsByCity: async (city: string) => {
        const cachedCoords = get().coords[city];
        if (cachedCoords) return cachedCoords;

        try {
          const newCoords = await getCoordsByCity(city);
          if (newCoords) {
            set((state) => ({
              coords: {
                ...state.coords,
                [city]: newCoords,
              },
            }));
            return newCoords;
          }
        } catch (err) {
          console.error(err);
        }
      },

      setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
    }),
    {
      name: "weather-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        lastCity: state.lastCity,
        coords: state.coords,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
