/// <amd-dependency path="text!./post/postTemplate.html" />

import angular = require('angular');
import wordpressHttp = require('./services/wordPressHttp');
import postController = require('./post/postController');

var postTemplate = require('text!./post/postTemplate.html');

var wpModule = angular.module('wordpressModule', [])
    .service('wordpressHttp', wordpressHttp)
    .controller('postController', postController)
    .directive('mzPostList', () => {
	return {
	    restrict: 'E',
	    controller: 'postController',
	    controllerAs: 'ctrl',
	    bindToController: true,
	    template: postTemplate
	};
    });

export = wpModule;
