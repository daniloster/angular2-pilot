import {Component, View} from 'angular2/core'
import {RouteConfig, AsyncRoute, Route} from 'angular2/router'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'
// import {COMMON_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'
// import {Router, Location} from 'angular2/router'
// import {ComponentHelper} from './util/component.helper'
import {HeroListComponent} from '../hero/list/hero-list.component'
import {HeroDetailComponent} from '../hero/detail/hero-detail.component'
// import {heroServiceInjector} from './hero.service.injector'

declare var System: any;

@Component({
    selector: 'hero-router',
    template: `
        <h2>Heroes container view</h2>
        <div>
            <router-outlet></router-outlet>
        <div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    // new AsyncRoute({
    ({
        path: "/",
        name: "Heroes",
        // loader: () => ComponentHelper.LoadComponentAsync('HeroListComponent','/app/hero/list/hero-list.component')
        component: HeroListComponent
    }),
    // new AsyncRoute({
    ({
        path: "/:id",
        name: "HeroDetail",
        // loader: () => ComponentHelper.LoadComponentAsync('HeroDetailComponent','/app/hero/detail/hero-detail.component')
        component: HeroDetailComponent
    })
]) export class HeroComponent {
    constructor() {
        console.log('HeroComponent');
    }
}