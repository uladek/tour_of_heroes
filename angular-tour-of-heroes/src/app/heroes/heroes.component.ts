import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../core/services/hero/hero.service';
import { Hero } from '../share/models';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
