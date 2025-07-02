export async function getWeatherByCity(city: string) {
  const res = await fetch(`/api/weather?city=${city}`);
  if (!res.ok) throw new Error("Erro ao buscar clima");
  return res.json();
}

export async function getCoordsByCity(city: string) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
  );
  const data = await res.json();

  if (!data?.length) throw new Error("Cidade não encontrada");

  const { lat, lon } = data[0];
  return { lat: parseFloat(lat), lon: parseFloat(lon) };
}
