"use client";

import { useState } from "react";

type Props = {
  format: number;
  startTime: string;
  initialTeamA: number;
  initialTeamB: number;
  max: number;
};

export default function WargameClient({
  format,
  startTime,
  initialTeamA,
  initialTeamB,
  max,
}: Props) {
  const [teamA, setTeamA] = useState(initialTeamA);
  const [teamB, setTeamB] = useState(initialTeamB);
  const [myTeam, setMyTeam] = useState<"A" | "B" | null>(null);

  const joinTeamA = () => {
    if (teamA >= max || myTeam) return;
    setTeamA(teamA + 1);
    setMyTeam("A");
  };

  const joinTeamB = () => {
    if (teamB >= max || myTeam) return;
    setTeamB(teamB + 1);
    setMyTeam("B");
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        Wargame {format}v{format} — {startTime}
      </h1>

      {myTeam && (
        <div className="bg-green-900 p-4 rounded-lg">
          ✅ Tu es inscrit dans la Team {myTeam}
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        <div className="border border-red-500 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-bold">Team A</h2>
          <p>{teamA} / {max} joueurs</p>

          <button
            onClick={joinTeamA}
            disabled={teamA >= max || !!myTeam}
            className="bg-red-600 px-4 py-2 rounded disabled:opacity-50"
          >
            Rejoindre Team A
          </button>
        </div>

        <div className="border border-blue-500 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-bold">Team B</h2>
          <p>{teamB} / {max} joueurs</p>

          <button
            onClick={joinTeamB}
            disabled={teamB >= max || !!myTeam}
            className="bg-blue-600 px-4 py-2 rounded disabled:opacity-50"
          >
            Rejoindre Team B
          </button>
        </div>
      </div>
    </main>
  );
}