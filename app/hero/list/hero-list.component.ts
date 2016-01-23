import {Component, Inject} from 'angular2/core'
import {Hero} from '../hero'
import {HeroServiceInterface} from '../hero.service.interface'
import {heroServiceInjector} from '../hero.service.injector'
import {OnInit} from 'angular2/core'
import {RouterLink} from "angular2/router"

@Component({
    selector:'hero',
    templateUrl: '/app/hero/list/hero-list.component.html',
    styleUrls: ['app/hero/list/hero-list.component.css'],
    directives: [RouterLink],
    providers: [heroServiceInjector]
})
export class HeroListComponent implements OnInit {
    title: String;
    heroes : Hero[];
    selectedHero: Hero;
    constructor( @Inject('HeroServiceInterface') private _heroService: HeroServiceInterface) {
        console.log('HeroListComponent');
        this.title = 'Tour of Heroes';
    }
    
    ngOnInit() {
        this.getHeroes();
    }
    
    public getHeroes() {
        this._heroService.getHeroes().then((value: Hero[]) => { this.heroes = value; });
    }
}