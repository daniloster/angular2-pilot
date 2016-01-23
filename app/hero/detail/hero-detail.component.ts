import {Component, Inject, OnInit} from 'angular2/core'
import {RouteParams, RouterLink} from 'angular2/router'
import {Hero} from '../hero'
import {HeroServiceInterface} from '../hero.service.interface'
import {heroServiceInjector} from '../hero.service.injector'

@Component({
    selector: 'hero-detail',
    templateUrl: '/app/hero/detail/hero-detail.component.html',
    styleUrls: ['app/hero/detail/hero-detail.component.css'],
    directives:[RouterLink],
    providers: [heroServiceInjector]
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;
    
    constructor(@Inject('HeroServiceInterface') private _heroService: HeroServiceInterface, private _routeParams:RouteParams) {
        console.log('HeroDetailComponent');
    }
    
    ngOnInit() {
        let id: Number;
        id = new Number(this._routeParams.get('id'));
        this._heroService.getHero(id).then((value: Hero) => {
            this.hero = value;
            console.log(value);
        });
    }
}