System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HEROES, HeroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HEROES = [
                { "id": 11, "name": "Mr. Nice" },
                { "id": 12, "name": "Narco" },
                { "id": 13, "name": "Bombasto" },
                { "id": 14, "name": "Celeritas" },
                { "id": 15, "name": "Magneta" },
                { "id": 16, "name": "RubberMan" },
                { "id": 17, "name": "Dynama" },
                { "id": 18, "name": "Dr IQ" },
                { "id": 19, "name": "Magma" },
                { "id": 20, "name": "Tornado" }
            ];
            HeroComponent = (function () {
                function HeroComponent() {
                    this.title = 'Tour of Heroes';
                    this.heroes = HEROES;
                    this.selectedHero = HEROES[0];
                }
                /**
                 * edit
                 */
                HeroComponent.prototype.edit = function (hero) {
                    this.selectedHero = hero;
                };
                HeroComponent = __decorate([
                    core_1.Component({
                        selector: 'hero',
                        templateUrl: '/app/hero/hero.component.html',
                        styleUrls: ['app/hero/hero.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroComponent);
                return HeroComponent;
            })();
            exports_1("HeroComponent", HeroComponent);
        }
    }
});
//# sourceMappingURL=hero.component.js.map