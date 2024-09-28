import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/hero.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../share/mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };
  constructor() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

// export class HeroesComponent implements OnInit {
//   hero: Hero = {
//     id: 1,
//     name: 'Windstorm',
//   };
//   constructor() {}
//   ngOnInit() {}
// }
