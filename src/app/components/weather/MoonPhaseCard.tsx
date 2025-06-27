export default function MoonPhaseCard() {
  return (
    <div className="bg-borderColor w-1/3 rounded-2xl p-4 h-64">
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="flex justify-center border-b border-background pb-2">
          <h2>Fase da Lua</h2>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <i className="bi bi-moon-stars text-5xl"></i>
          <p>Lua Nova</p>
        </div>
        <div className="flex justify-center gap-4">
          {Array.from({ length: 7 }, (_, index) => (
            <i key={index} className="bi bi-moon-fill text-2xl"></i>
          ))}
        </div>
      </div>
    </div>
  );
}
