import {Hero} from './hero';

export interface HeroServiceInterface {
    getHeroes: () => Promise<Hero[]>;
    getHeroesSlowly: () => Promise<Hero[]>;
    getHero: (id: Number) => Promise<Hero>;
    getHeroSlowly: (id: Number) => Promise<Hero>;
}