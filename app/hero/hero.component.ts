import {Component, View} from 'angular2/core'
import {RouteConfig, AsyncRoute, Route} from 'angular2/router'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouterLink, RouterOutlet} from 'angular2/router'
import {COMMON_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'
// import {Router, Location} from 'angular2/router'
import {HeroListComponent} from '../hero/list/hero-list.component'
import {HeroDetailComponent} from '../hero/detail/hero-detail.component'
import {heroServiceInjector} from './hero.service.injector'

declare var System: any;

@Component({
    selector: 'hero-router',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    // new AsyncRoute({
    new Route({
        path: "/",
        name: "Heroes",
        // loader: () => ComponentHelper.LoadComponentAsync('HeroListComponent','/app/hero/list/hero-list.component')
        component: HeroListComponent,
        useAsDefault: true
    }),
    // new AsyncRoute({
    new Route({
        path: "/:id/detail",
        name: "HeroDetail",
        // loader: () => ComponentHelper.LoadComponentAsync('HeroDetailComponent','/app/hero/detail/hero-detail.component')
        component: HeroDetailComponent
    })
]) export class HeroComponent {
    constructor() {
    }
}