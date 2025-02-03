import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Superhero } from "../types/superhero";

export default function SuperheroList({ refresh }: { refresh: number }) {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  useEffect(() => {
    api.get("/superheroes").then((res) => setSuperheroes(res.data));
  }, [refresh]);

  return (
    <div className="space-y-2">
      {superheroes.map((hero) => (
        <div key={hero.id} className="border p-2 rounded">
          <h2 className="text-lg font-bold">{hero.name}</h2>
          <p>Superpower: {hero.superpower}</p>
          <p>Humility: {hero.humilityScore}</p>
        </div>
      ))}
    </div>
  );
}
