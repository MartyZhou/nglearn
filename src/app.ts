/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts" />

import angular = require('angular');
import phoneModule = require('./phone/phoneModule');
import wpModule = require('./wordpress/wordpressModule');

angular.element(document).ready(()=>{
    angular.bootstrap(document, [phoneModule.name, wpModule.name]);
});
