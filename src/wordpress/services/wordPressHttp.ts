class WordPressHttp {
    static $inject = ['$http'];

    constructor(private http: ng.IHttpService){}
    
    getPosts(): ng.IPromise<any>{
	return	this.http({
	    method: 'GET',
	    url: 'http://blog.martyzhou.com/wp-json/wp/v2/posts'
	}).then((response: any) => {
	    return response.data;
	}, (error: any) => {
	    return [];
	});
    }
}

export = WordPressHttp;
