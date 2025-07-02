"use client";

type TabNavigationProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

export default function TabNavigation({
  selectedTab,
  setSelectedTab,
}: TabNavigationProps) {
  const options = [
    { label: "Hoje", value: "today" },
    { label: "Amanhã", value: "tomorrow" },
    { label: "Próximos dias", value: "nextDays" },
  ];

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <nav className="flex justify-center md:justify-start ">
      <ul className="flex gap-8 font-semibold">
        {options.map((item, idx) => (
          <li
            key={idx}
            className="group relative cursor-pointer"
            onClick={() => handleTabClick(item.value)}
          >
            {item.label}
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-foreground transition-all duration-300 ${
                selectedTab === item.value ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
