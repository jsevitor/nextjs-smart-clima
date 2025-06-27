import Image from "next/image";
import TabNavigation from "./components/TabNavigation";

export default function Home() {
  return (
    <div className="container mx-auto h-screen pt-24 flex">
      <TabNavigation />
    </div>
  );
}
