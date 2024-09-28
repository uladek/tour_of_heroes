import { Injectable } from '@angular/core';
import { HEROES } from '../../../share/mock-heroes';
import { Observable, of } from 'rxjs';
import { Hero } from '../../../share/models';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
