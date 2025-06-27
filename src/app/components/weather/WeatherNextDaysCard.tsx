export default function WeatherNextDaysCard() {
  return (
    <div className="bg-borderColor w-2/3 rounded-2xl p-4">
      <div className="flex py-4">
        <div className="flex flex-col gap-4 justify-between items-center bg-background rounded-2xl p-4">
          <div className="border-b border-borderColor pb-2">Dia</div>
          <div>
            <i className="bi bi-cloud-sun text-5xl"></i>
          </div>
          <div>23°</div>
        </div>
      </div>
    </div>
  );
}
