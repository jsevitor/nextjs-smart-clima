"use client";

import { useState } from "react";
import { useWeatherStore } from "@/store/useWeatherStore";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [city, setCity] = useState<string>("");
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;
    fetchWeather(city.trim());
    setCity("");
  };

  return (
    <header className="border-b border-borderColor py-4 fixed top-0 left-0 right-0 bg-background z-50">
      <div className="container mx-auto flex flex-col gap-2 md:flex-row md:justify-between md:items-center px-4 lg:px-0">
        <div className="text-lg font-semibold">SMART CLIMA</div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <form
            onSubmit={handleSubmit}
            className="flex gap-4 bg-borderColor px-4 py-2 rounded-full"
          >
            <span>
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Buscar cidade..."
              className="w-full outline-0 bg-transparent"
            />
          </form>
        </div>
        <div className="md:static absolute top-4 right-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
