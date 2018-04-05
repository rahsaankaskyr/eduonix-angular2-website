"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./components/pages/home.component");
var about_component_1 = require("./components/pages/about.component");
var appRoutes = [
    {
        path: ' ',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map