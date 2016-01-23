import {Component, View} from 'angular2/core'
import {RouteConfig, AsyncRoute, Route} from 'angular2/router'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {ComponentHelper} from '../util/component.helper'

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
    new AsyncRoute({
        path: "/",
        name: "Heroes",
        loader: () => ComponentHelper.LoadComponentAsync('/app/hero/list/hero-list.component')
    }),
    new AsyncRoute({
        path: "/:id",
        name: "HeroDetail",
        loader: () => ComponentHelper.LoadComponentAsync('/app/hero/detail/hero-detail.component')
    })
]) export class HeroComponent {
    constructor() {
        console.log('HeroComponent');
    }
}