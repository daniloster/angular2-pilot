import {HEROES} from './hero.mock'
import {Hero} from './hero'
import {HeroServiceInterface} from './hero.service.interface'
import {Injectable} from 'angular2/core'

@Injectable()
export class HeroService implements HeroServiceInterface {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(this.getHeroes()), 2000) // 2 seconds
        );
    }
    
    getHero(id: Number) {
        return new Promise<Hero>(resolve => resolve(HEROES.filter((value: Hero) => { return value.id == id }).pop()));
    }
    // See the "Take it slow" appendix
    getHeroSlowly(id: Number) {
        return new Promise<Hero>(resolve =>
            setTimeout(() => resolve(this.getHero(id)), 2000) // 2 seconds
        );
    }
}