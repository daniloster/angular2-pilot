import {Component} from 'angular2/core';
import {Hero} from '../hero';

@Component({
    selector: 'hero-detail',
    templateUrl: '/app/hero/detail/hero-detail.component.html',
    styleUrls: ['app/hero/detail/hero-detail.component.css'],
    inputs: ['hero']
})
export class HeroDetailComponent {
    public hero: Hero;
}