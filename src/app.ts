/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts" />

import angular = require('angular');
import phoneModule = require('./phone/phoneModule');

angular.element(document).ready(()=>{
    angular.bootstrap(document, [phoneModule.name]);
});
