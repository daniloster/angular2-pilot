System.register(['angular2/platform/browser', './greeting/greeting.component', './hero/hero.component'], function(exports_1) {
    var browser_1, greeting_component_1, hero_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (greeting_component_1_1) {
                greeting_component_1 = greeting_component_1_1;
            },
            function (hero_component_1_1) {
                hero_component_1 = hero_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(greeting_component_1.GreetingComponent);
            browser_1.bootstrap(hero_component_1.HeroComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map