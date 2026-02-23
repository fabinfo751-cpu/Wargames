"use client";

import { useState } from "react";

type Props = {
  game: {
    format: number;
  };
};

export default function WargameClient({ game }: Props) {
  const maxPlayers = game?.format ?? 36;

  const currentUser = "Raamso";

  const [teamAPlayers, setTeamAPlayers] = useState<string[]>([]);
  const [teamBPlayers, setTeamBPlayers] = useState<string[]>([]);
  const [spectators, setSpectators] = useState<string[]>([currentUser]);

  const [userTeam, setUserTeam] = useState<"A" | "B" | null>(null);

  const joinTeam = (team: "A" | "B") => {
    if (userTeam !== null) return;

    if (team === "A" && teamAPlayers.length < maxPlayers) {
      setTeamAPlayers((prev) => [...prev, currentUser]);
    }

    if (team === "B" && teamBPlayers.length < maxPlayers) {
      setTeamBPlayers((prev) => [...prev, currentUser]);
    }

    setSpectators((prev) => prev.filter((p) => p !== currentUser));
    setUserTeam(team);
  };

  return (
    <div className="mt-10 space-y-10">
      {/* HEADER */}
      <div className="tl-panel p-6 rounded-xl">
        <h2 className="text-2xl tl-title mb-6">Jeux de guerre</h2>

        <div className="grid grid-cols-4 gap-6 text-sm">
          <div>
            <p className="text-gray-400">Format</p>
            <p>{maxPlayers} vs {maxPlayers}</p>
          </div>

          <div>
            <p className="text-gray-400">Membres</p>
            <p>{teamAPlayers.length + teamBPlayers.length}</p>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-8">
        {/* TEAM A */}
        <div className="tl-panel tl-gold rounded-xl overflow-hidden flex flex-col h-[520px]">
          <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-yellow-700 to-yellow-600 text-black font-semibold">
            <span>Jaune</span>
            <span>{teamAPlayers.length}/{maxPlayers}</span>
          </div>

          <div className="flex-1 p-4 space-y-2">
            {Array.from({ length: maxPlayers }).map((_, i) => (
              <div
                key={i}
                className="h-10 bg-black/30 rounded-md border border-white/5 flex items-center px-3 text-sm"
              >
                {teamAPlayers[i] ?? (
                  <span className="text-gray-400">Slot vide</span>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10">
            <button
              onClick={() => joinTeam("A")}
              disabled={
                userTeam !== null || teamAPlayers.length >= maxPlayers
              }
              className="w-full bg-gradient-to-b from-yellow-600 to-yellow-800 py-2 rounded-lg shadow-lg hover:brightness-110 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Rejoindre
            </button>
          </div>
        </div>

        {/* TEAM B */}
        <div className="tl-panel tl-red rounded-xl overflow-hidden flex flex-col h-[520px]">
          <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold">
            <span>Rouge</span>
            <span>{teamBPlayers.length}/{maxPlayers}</span>
          </div>

          <div className="flex-1 p-4 space-y-2">
            {Array.from({ length: maxPlayers }).map((_, i) => (
              <div
                key={i}
                className="h-10 bg-black/30 rounded-md border border-white/5 flex items-center px-3 text-sm"
              >
                {teamBPlayers[i] ?? (
                  <span className="text-gray-400">Slot vide</span>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10">
            <button
              onClick={() => joinTeam("B")}
              disabled={
                userTeam !== null || teamBPlayers.length >= maxPlayers
              }
              className="w-full bg-gradient-to-b from-red-600 to-red-800 py-2 rounded-lg shadow-lg hover:brightness-110 transition text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Rejoindre
            </button>
          </div>
        </div>

        {/* SPECTATEURS */}
        <div className="tl-panel p-5 rounded-xl">
          <h3 className="text-lg font-bold mb-4">Spectateurs</h3>

          <div className="space-y-2 min-h-[220px]">
            {spectators.length === 0 && (
              <p className="text-gray-500 text-sm">
                Aucun spectateur
              </p>
            )}

            {spectators.map((p) => (
              <div
                key={p}
                className="bg-[#2a2f3a] px-3 py-2 rounded text-sm"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}