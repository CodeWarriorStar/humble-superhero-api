import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(() => {
    service = new SuperheroesService();
  });

  it('should add and retrieve superheroes sorted by humility score', () => {
    service.create({ name: 'Hero1', superpower: 'Fly', humilityScore: 5 });
    service.create({ name: 'Hero2', superpower: 'Strength', humilityScore: 8 });

    const result = service.findAll();
    expect(result[0].name).toBe('Hero2');
  });
});
