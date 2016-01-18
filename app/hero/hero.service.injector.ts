import {bind} from 'angular2/core'
import {HeroService} from './hero.service'

export var heroServiceInjector = bind('HeroServiceInterface').toClass(HeroService);