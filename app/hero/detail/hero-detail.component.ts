import {Component, Inject} from 'angular2/core'
import {COMMON_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'
import {RouterLink, RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'
import {Hero} from '../hero'
import {HeroServiceInterface} from '../hero.service.interface'
import {heroServiceInjector} from '../hero.service.injector'
import {NavigationComponent} from '../../navigation/navigation.component'

@Component({
    selector: 'hero-detail',
    templateUrl: '/app/hero/detail/hero-detail.component.html',
    styleUrls: ['/app/hero/detail/hero-detail.component.css'],
    directives:[ROUTER_DIRECTIVES, CORE_DIRECTIVES, COMMON_DIRECTIVES/*, NavigationComponent*/],
    providers: [heroServiceInjector, ROUTER_PROVIDERS]
})
export class HeroDetailComponent {
    id: any;
    public hero: Hero;
    
    constructor(@Inject('HeroServiceInterface') private _heroService: HeroServiceInterface, params: RouteParams) {
        this.id = params.get('id');
        console.log('HeroDetailComponent', this.id);
        this.getHero();
    }
    
    getHero() {
        this._heroService.getHeroSlowly(this.id).then((value: Hero) => {
            this.hero = value;
            console.log(value);
        });
    }
}