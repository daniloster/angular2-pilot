import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {Router, Location} from 'angular2/router'

@Component({
    selector: 'navigation',
    styleUrls: ['app/navigation/navigation.component.css'],
    template: `
        <div class="navigation">
            <h2>Navigation:</h2>
            <div>
                <div class="nav-item" [class.active]="getLinkStyle('/home')">
                    <a [routerLink]="['/Home']">Home</a>
                </div>
                <div class="nav-item" [class.active]="getLinkStyle('/heroes')">
                    <a [routerLink]="['/Heroes', 'Heroes']">Heroes</a>
                </div>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
}) export class NavigationComponent {
    constructor(private _router: Router, private _location: Location) { }
    
    getLinkStyle(path) {
        return this._location.path() === path;
    }
}