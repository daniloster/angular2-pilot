import {Component} from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'
import {Router, Location} from 'angular2/router'

import {HomeComponent} from '../home.component'
import {HeroComponent} from '../hero/hero.component'
import {HeroDetailComponent} from '../hero/detail/hero-detail.component'

@Component({
    selector: 'navigation',
    styleUrls: ['app/navigation/navigation.component.css'],
    template: `
        <div class="navigation">
            <h2>Navigation:</h2>
            <div>
                <div class="nav-item" [class.active]="getLinkStyle('/home')">
                    <a [routerLink]="['Home']">Home</a>
                </div>
                <div class="nav-item" [class.active]="getLinkStyle('/heroes')">
                    <a [routerLink]="['Heroes']">Heroes</a>
                </div>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
}) export class Navigation {
    router: Router;
    location: Location;
    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }
    
    getLinkStyle(path) {
        // console.log('getLinkStyle', path);
        return this.location.path() === path;
    }
}