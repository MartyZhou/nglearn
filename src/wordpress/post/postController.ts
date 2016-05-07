class PostController{
    static $inject = ['wordpressHttp'];

    private posts: any;
    
    constructor(private wpHttp: any){
	wpHttp.getPosts().then((data) => {
	    this.posts = data;
	});
    }    
}

export = PostController;
