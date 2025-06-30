export async function getWeatherByCity(city: string) {
  const res = await fetch(`/api/weather?city=${city}`);
  if (!res.ok) throw new Error("Erro ao buscar clima");
  return res.json();
}
