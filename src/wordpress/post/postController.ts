/// <reference path="post.d.ts" />

class PostController{
    static $inject = ['wordpressHttp'];

    private posts: PostInterface.IPost[];
    
    constructor(private wpHttp: any){
	wpHttp.getPosts().then((data) => {
	    this.posts = data;
	});
    }    
}

export = PostController;
