export default function TabNavigation() {
  const options = [
    { label: "Hoje", value: "today" },
    { label: "Amanhã", value: "tomorrow" },
    { label: "Próximos dias", value: "nextDays" },
  ];

  return (
    <nav>
      <ul className="flex gap-8 font-semibold">
        {options.map((item, idx) => (
          <li key={idx} className="group relative cursor-pointer">
            {item.label}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
