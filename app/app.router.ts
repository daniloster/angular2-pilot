import {Component} from 'angular2/core'
import {RouteConfig, AsyncRoute} from 'angular2/router'
import {Router, Location} from 'angular2/router'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'
import {ComponentHelper} from './util/component.helper'
import {NavigationComponent} from './navigation/navigation.component'

@Component({
    selector: 'app-router',
    template: `
        <navigation></navigation>
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, NavigationComponent]
})    
@RouteConfig([
    new AsyncRoute({
        path: "/home",
        name: "Home",
        loader: () => ComponentHelper.LoadComponentAsync('/app/home.component'),
        useAsDefault: true
    }),
    new AsyncRoute({
        path: "/heroes/...",
        name: "Heroes",
        loader: () => ComponentHelper.LoadComponentAsync('/app/hero/hero.component')
    })
])
export class AppRouter { 
    constructor(private _router: Router, private _location: Location) { }
    
    getLinkStyle(path) {
        return this._location.path() === path;
    }
}