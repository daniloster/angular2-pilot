import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './detail/hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

@Component({
    selector:'hero',
    templateUrl: '/app/hero/hero.component.html',
    styleUrls: ['app/hero/hero.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class HeroComponent implements OnInit {
    constructor(private _heroService: HeroService) { }
    public title = 'Tour of Heroes';
    public heroes;
    public selectedHero: Hero;
    
    ngOnInit() {
        this.getHeroes();
    }
    
    public edit(hero : Hero) {
        this.selectedHero = hero;
    }
    
    public getHeroes() {
        this._heroService.getHeroesSlowly().then((value: Hero[]) => { this.heroes = value; });
    }
}