export default function Header() {
  return (
    <header className="border-b border-borderColor py-4 fixed top-0 left-0 right-0 bg-background z-50">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-0">
        <div className="text-lg font-semibold">SMART CLIMA</div>
        <div className="w-1/3">
          <div className="flex gap-4 bg-borderColor px-4 py-2 rounded-full">
            <span>
              <i className="bi bi-search"></i>{" "}
            </span>
            <input
              type="text"
              placeholder="Buscar cidade..."
              className="w-full outline-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
