import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, APP_BASE_HREF} from "angular2/router"
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from "angular2/router"
import {provide} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {AppRouter} from './app.router'
import {bootstrap} from 'angular2/platform/browser'

bootstrap(AppRouter,
    [ROUTER_PROVIDERS/*,
    provide(LocationStrategy, { useClass: PathLocationStrategy }),
    provide(APP_BASE_HREF, { useValue: '/' })*/])