import {
    Component
} from 'angular2/core'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router"
import {Navigation} from './navigation/navigation.component'

@Component({
    selector: 'app',
    templateUrl: '/app/home.component.html',
    directives: [ROUTER_DIRECTIVES/*, Navigation*/],
    providers: [ROUTER_PROVIDERS]
})
export class HomeComponent {
    constructor() {
        console.log('Initialising HomeComponent');
    }
}