import { Superhero } from '../types/superhero';

const API_BASE_URL = 'http://localhost:3000';

export const fetchSuperheroes = async (): Promise<Superhero[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/superheroes`);
    if (!response.ok) throw new Error('Error fetching superheroes');
    const data: Superhero[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addSuperhero = async (superhero: Superhero): Promise<Superhero | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/superheroes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(superhero),
    });
    if (!response.ok) throw new Error('Error adding superhero');
    const data: Superhero = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
