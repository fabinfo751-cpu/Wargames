export type Wargame = {
  id: string;
  format: number;
  startTime: string;
  teamA: number;
  teamB: number;
  max: number;
};

export const wargames: Wargame[] = [
  {
    id: "1",
    format: 36,
    startTime: "18:00",
    teamA: 28,
    teamB: 29,
    max: 36,
  },
  {
    id: "2",
    format: 72,
    startTime: "21:00",
    teamA: 65,
    teamB: 68,
    max: 72,
  },
];