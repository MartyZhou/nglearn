/// <amd-dependency path="text!./post/postBrief.html" name="postBriefTemplate" />
/// <amd-dependency path="text!./post/postTemplate.html" name="postTemplate" />

import angular = require('angular');
import wordpressHttp = require('./services/wordPressHttp');
import postController = require('./post/postController');

var postTemplate;
var postBriefTemplate;

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
    })
    .directive('wpPost', () => {
	return {
	    restrict: 'E',
	    scope: {
		post: '='
	    },
	    template: postBriefTemplate
	};
    });

export = wpModule;
