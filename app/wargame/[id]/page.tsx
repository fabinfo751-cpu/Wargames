import { wargames } from "../../../data/wargames";
import WargameClient from "../../../components/WargameClient";

export default async function WargamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const game = wargames.find((g) => g.id === id);

  if (!game) {
    return (
      <main className="min-h-screen bg-black text-white p-6">
        Wargame introuvable
      </main>
    );
  }

  return (
    <WargameClient
      format={game.format}
      startTime={game.startTime}
      initialTeamA={game.teamA}
      initialTeamB={game.teamB}
      max={game.max}
    />
  );
}