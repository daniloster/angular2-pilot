import {Component, Inject} from 'angular2/core'
import {COMMON_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'
import {Hero} from '../hero'
import {HeroServiceInterface} from '../hero.service.interface'
import {heroServiceInjector} from '../hero.service.injector'
import {OnInit} from 'angular2/core'
import {RouterLink, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router"
import {NavigationComponent} from '../../navigation/navigation.component'

@Component({
    selector:'hero',
    templateUrl: '/app/hero/list/hero-list.component.html',
    styleUrls: ['app/hero/list/hero-list.component.css'],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, COMMON_DIRECTIVES/*, NavigationComponent*/],
    providers: [heroServiceInjector, ROUTER_PROVIDERS]
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
        this._heroService.getHeroesSlowly().then((value: Hero[]) => { this.heroes = value; });
    }
}