class WordPressHttp {
    static $inject = ['$http'];

    constructor(private http: ng.IHttpService){}
    
    getPosts(): ng.IPromise<PostInterface.IPost[]>{
	return this.http({
	    method: 'GET',
	    url: 'http://blog.martyzhou.com/wp-json/wp/v2/posts'
	}).then((response: ng.IHttpPromiseCallbackArg<PostInterface.IPost[]>) => {
	    return response.data;
	}, (error: any) => {
	    return [];
	});
    }
}

export = WordPressHttp;
