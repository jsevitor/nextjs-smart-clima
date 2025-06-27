export default function WeatherTomorrowCard() {
  return (
    <div className="bg-borderColor w-2/3 rounded-2xl p-4">
      <div className="flex justify-between border-b border-background pb-2">
        <div className="flex gap-2 items-center">
          <i className="bi bi-geo-alt-fill"></i>
          <span>Manaus, Brasil</span>
        </div>
        <div className="flex gap-2">
          <span>Sexta-feira,</span>
          <span>14:22</span>
        </div>
      </div>
      <div className="flex py-4">
        <div className="flex justify-center w-1/2 mt-2">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <i className="bi bi-cloud-sun text-7xl"></i>
              <div className="">
                <span className="text-8xl font-extrabold">23°</span>
              </div>
            </div>
            <div className="flex justify-center">
              <span className="">Nublado</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-1/2 mt-2">
          <div className="flex flex-col gap-2 w-4/5">
            <div className="flex justify-between border-b border-background">
              <span className="">Chuva</span>
              <span className="">10mm</span>
            </div>
            <span className="">Vento</span>
            <span className="">Umidade</span>
            <span className="">Prob. de Chuva</span>
            <span className="">Sol</span>
          </div>
        </div>
      </div>
    </div>
  );
}
