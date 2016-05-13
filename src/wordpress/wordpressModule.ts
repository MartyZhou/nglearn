/// <amd-dependency path="text!./post/postBrief.html" name="postBriefTemplate" />
/// <amd-dependency path="text!./post/postTemplate.html" name="postTemplate" />
/// <amd-dependency path="text!./comment/commentTemplate.html" name="commentTemplate" />
/// <amd-dependency path="text!./post/postDetailTemplate.html" name="postDetailTemplate" />

import angular = require('angular');
import wordpressHttp = require('./services/wordPressHttp');
import postController = require('./post/postController');
import postDetailController = require('./post/postDetailController');

var postTemplate;
var postBriefTemplate;
var commentTemplate;
var postDetailTemplate;

var wpModule = angular.module('wordpressModule', [])
    .service('wordpressHttp', wordpressHttp)
    .controller('postController', postController)
    .controller('postDetailController', postDetailController)
    .directive('wpPostDetail', () => {
	return {
	    restrict: 'E',
	    scope: {
		post: '='
	    },
    	    controller: 'postDetailController',
	    controllerAs: 'ctrl',
	    bindToController: true,
	    template: postDetailTemplate
	};
    })
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
    })
    .directive('wpComment', () => {
	return {
	    restrict: 'E',
	    scope: {
		comment: '='
	    },
	    template: commentTemplate
	};
    });

export = wpModule;
