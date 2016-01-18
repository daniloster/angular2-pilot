import {Component, View} from 'angular2/core'
import {RouteConfig, AsyncRoute, Route} from 'angular2/router'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouterLink, RouterOutlet} from 'angular2/router'
import {CORE_DIRECTIVES} from 'angular2/common'
// import {Router, Location} from 'angular2/router'
import {ComponentHelper} from './util/system'
import {Navigation} from './navigation/navigation.component'
import {HomeComponent} from './home.component'
import {HeroComponent} from './hero/hero.component'
import {heroServiceInjector} from './hero/hero.service.injector'



// @Component({
//     selector: 'my-app',
//     template: `
//         <router-outlet></router-outlet>
//     `,
//     directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
//     providers: [ROUTER_PROVIDERS]
// })
// @View({
//     template: `
//         <router-outlet></router-outlet>
//     `,
//     directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
// })
@Component({
    selector: 'my-app',
    template: `
        <navigation></navigation>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, Navigation]//,
    // providers: [heroServiceInjector]
})
@RouteConfig([
    // new AsyncRoute({
    new Route({
        path: "/home",
        name: "Home",
        // loader: () => ComponentHelper.LoadComponentAsync('HomeComponent','/app/home.component'),
        component: HomeComponent,        
        useAsDefault: true
    }),
    // new AsyncRoute({
    new Route({
        path: "/heroes/...",
        name: "Heroes",
        // loader: () => ComponentHelper.LoadComponentAsync('HeroComponent','/app/hero/hero.component')
        component: HeroComponent
    })
]) export class AppRouter {
    constructor() {
    }
}