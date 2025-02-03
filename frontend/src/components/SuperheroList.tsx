import React, { useEffect, useState } from 'react';
import { Superhero } from '../types/superhero';
import { fetchSuperheroes } from '../services/api';

interface SuperheroListProps {
  refreshFlag: boolean;
}

const SuperheroList: React.FC<SuperheroListProps> = ({ refreshFlag }) => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  useEffect(() => {
    const getSuperheroes = async () => {
      const data = await fetchSuperheroes();
      setSuperheroes(data);
    };

    getSuperheroes();
  }, [refreshFlag]);

  return (
    <div>
      <h2>Superhero List (Sorted by Humility Score)</h2>
      <ul>
        {superheroes.map((hero, index) => (
          <li key={index}>
            <strong>{hero.name}</strong> – {hero.superpower} (Humility Score: {hero.humilityScore})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperheroList;
