import {Component} from 'angular2/core';
import {Hero} from './hero';

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

@Component({
    selector:'hero',
    templateUrl: '/app/hero/hero.component.html',
    styleUrls:['app/hero/hero.component.css']
})
export class HeroComponent { 
    public title = 'Tour of Heroes';
    public heroes = HEROES;
    public selectedHero: Hero = HEROES[0];
    /**
     * edit
     */
    public edit(hero : Hero) {
        this.selectedHero = hero;
    }
}