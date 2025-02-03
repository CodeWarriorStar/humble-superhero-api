import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Injectable()
export class SuperheroesService {
  private superheroes: CreateSuperheroDto[]  = [];

  create(superhero: CreateSuperheroDto) {
    this.superheroes.push(superhero);
    return superhero;
  }

  findAll() {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
