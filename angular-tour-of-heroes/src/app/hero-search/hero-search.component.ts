import { Component } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { Hero } from '../share/models';
import { HeroService } from '../core/services/hero/hero.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.scss',
})
export class HeroSearchComponent {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term !!!
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
