import WargameCard from "../components/WargameCard";
import { wargames } from "../data/wargames";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        Wargames programmées
      </h1>

      {wargames.map((game) => (
        <WargameCard key={game.id} {...game} />
      ))}
    </main>
  );
}