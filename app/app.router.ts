import {Component} from 'angular2/core'
import {RouteConfig, /*AsyncRoute,*/ Route} from 'angular2/router'
import {Router, Location} from 'angular2/router'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'
// import {CORE_DIRECTIVES, COMMON_DIRECTIVES} from 'angular2/common'
// import {Router, Location} from 'angular2/router'
// import {ComponentHelper} from './util/component.helper'
// import {NavigationComponent} from './navigation/navigation.component'
import {HomeComponent} from './home.component'
import {HeroComponent} from './hero/hero.component'
// import {HeroListComponent} from './hero/list/hero-list.component'
// import {HeroDetailComponent} from './hero/detail/hero-detail.component'
// import {heroServiceInjector} from './hero/hero.service.injector'



@Component({
    selector: 'app-router',
    template: `
        <div class="navigation">
            <h2>Navigation:</h2>
            <div>
                <div class="nav-item" [class.active]="getLinkStyle('/home')">
                    <a [routerLink]="['Home']">Home</a>
                </div>
                <div class="nav-item" [class.active]="getLinkStyle('/heroes')">
                    <a [routerLink]="['Heroes', 'Heroes']">Heroes</a>
                </div>
            </div>
        </div>
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES/*, NavigationComponent*/]
})    
@RouteConfig([
    // new AsyncRoute({
    ({
        path: "/home",
        name: "Home",
        // loader: () => ComponentHelper.LoadComponentAsync('HomeComponent','/app/home.component'),
        component: HomeComponent,        
        useAsDefault: true
    }),
    // new AsyncRoute({
    ({
        path: "/heroes/...",
        name: "Heroes",
        // loader: () => ComponentHelper.LoadComponentAsync('HeroComponent','/app/hero/hero.component')
        component: HeroComponent
    })
])
export class AppRouter { 
    constructor(private _router: Router, private _location: Location) { }
    
    getLinkStyle(path) {
        return this._location.path() === path;
    }
}