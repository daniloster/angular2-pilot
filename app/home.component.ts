import {Component} from 'angular2/core'
import {CORE_DIRECTIVES, COMMON_DIRECTIVES} from 'angular2/common'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router"
import {NavigationComponent} from './navigation/navigation.component'

@Component({
    selector: 'app',
    templateUrl: '/app/home.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {
    constructor() {
        console.log('HomeComponent');
    }
}