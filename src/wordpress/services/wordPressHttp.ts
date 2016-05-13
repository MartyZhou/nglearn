class WordPressHttp implements PostInterface.IWordPressHttp {
    static $inject = ['$http'];

    constructor(private http: ng.IHttpService){}
    
    getAllPosts(): ng.IPromise<PostInterface.IPost[]>{
	return this.http({
	    method: 'GET',
	    url: 'http://blog.martyzhou.com/wp-json/wp/v2/posts'
	}).then((response: ng.IHttpPromiseCallbackArg<PostInterface.IPost[]>) => {
	    return response.data;
	}, (error: any) => {
	    return [];
	});
    }

    getPost(id: number): ng.IPromise<PostInterface.IPost> {
	return this.http({
	    method: 'GET',
	    url: 'http://blog.martyzhou.com/wp-json/wp/v2/posts',
	    params: id
	}).then((response: ng.IHttpPromiseCallbackArg<PostInterface.IPost>) => {
	    return response.data;
	}, (error: any) => {
	    return <PostInterface.IPost>{};
	});
    }

    getComments(id: number): ng.IPromise<PostInterface.IComment[]>{
	return this.http({
	    method: 'GET',
	    url: 'http://blog.martyzhou.com/wp-json/wp/v2/comments',
	    params: {post: id}
	}).then((response: ng.IHttpPromiseCallbackArg<PostInterface.IComment[]>) => {
	    return response.data;
	}, (error: any) => {
	    return []
	});
    }
}

export = WordPressHttp;
