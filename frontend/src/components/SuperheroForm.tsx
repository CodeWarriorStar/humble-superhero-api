import React, { useState, FormEvent } from 'react';
import { Superhero } from '../types/superhero';
import { addSuperhero } from '../services/api';

interface SuperheroFormProps {
  onSuperheroAdded: () => void;
}

const SuperheroForm: React.FC<SuperheroFormProps> = ({ onSuperheroAdded }) => {
  const [name, setName] = useState<string>('');
  const [superpower, setSuperpower] = useState<string>('');
  const [humilityScore, setHumilityScore] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const score = parseInt(humilityScore, 10);
    if (isNaN(score) || score < 1 || score > 10) {
      alert('Humility score must be a number between 1 and 10.');
      return;
    }

    const newSuperhero: Superhero = { name, superpower, humilityScore: score };

    const result = await addSuperhero(newSuperhero);
    if (result) {
      onSuperheroAdded();
      setName('');
      setSuperpower('');
      setHumilityScore('');
    } else {
      alert('Failed to add superhero. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Superpower:</label>
        <input
          type="text"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Humility Score (1-10):</label>
        <input
          type="number"
          value={humilityScore}
          onChange={(e) => setHumilityScore(e.target.value)}
          required
          min="1"
          max="10"
        />
      </div>
      <button type="submit">Add Superhero</button>
    </form>
  );
};

export default SuperheroForm;
