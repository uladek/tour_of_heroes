import { Injectable } from '@angular/core';
import { HEROES } from '../../../share/mock-heroes';
import { Observable, of } from 'rxjs';
import { Hero } from '../../../share/models';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');

    return heroes;
  }
}
