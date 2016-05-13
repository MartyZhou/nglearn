/// <reference path="post.d.ts" />

class PostController{
    static $inject = ['wordpressHttp'];

    private posts: PostInterface.IPost[];
    
    constructor(private wpHttp: PostInterface.IWordPressHttp){
	wpHttp.getAllPosts().then((data) => {
	    this.posts = data;
	});
    }
}

export = PostController;
