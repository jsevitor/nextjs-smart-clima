import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.HGBRASIL_KEY;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json(
      { error: "Cidade não fornecida" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://api.hgbrasil.com/weather?key=${API_KEY}&city_name=${city}`
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao buscar dados do clima:", error);
    return NextResponse.json(
      { error: "Erro ao buscar dados do clima" },
      { status: 500 }
    );
  }
}
