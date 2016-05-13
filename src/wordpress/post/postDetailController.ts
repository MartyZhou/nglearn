/// <reference path="post.d.ts" />

interface IPostDetailScope extends ng.IScope{
    post: PostInterface.IPost;
}

class PostDetailController{
    static $inject = ['$scope', 'wordpressHttp'];

    private post: PostInterface.IPost;
    private comments: PostInterface.IComment[];
    
    constructor($scope: IPostDetailScope, private wpHttp: PostInterface.IWordPressHttp){
	this.post = $scope.post;
	this.wpHttp.getComments(this.post.id).then((comments) => {
	    this.comments = comments;
	});
    }
}

export = PostDetailController;
