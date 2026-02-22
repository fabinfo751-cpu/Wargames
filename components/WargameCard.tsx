import Link from "next/link";

type Props = {
  id: string;
  format: number;
  startTime: string;
  teamA: number;
  teamB: number;
  max: number;
};

export default function WargameCard({
  id,
  format,
  startTime,
  teamA,
  teamB,
  max,
}: Props) {
  return (
    <Link href={`/wargame/${id}`}>
      <div className="border border-gray-700 rounded-lg p-6 hover:border-yellow-500 transition cursor-pointer">
        <h2 className="text-xl font-bold">
          {format}v{format} — {startTime}
        </h2>

        <div className="mt-3 text-gray-400">
          Team A : {teamA}/{max}
          <br />
          Team B : {teamB}/{max}
        </div>
      </div>
    </Link>
  );
}