declare module PostInterface {
    interface IRendered{
	rendered: string;
    }

    interface IPost{
    type: string;
    title: IRendered;
    content: IRendered;
    id: number;
    date: Date;
    link: string;
    modified: Date;
    author: number;
    }

    interface IComment{
	type: string;
	content: IRendered;
	id: number;
	date: Date;
	link: string;
	parent: number;
	status: string;
	post: number;
	author: number;
	author_url: string;
	author_name: string;
	author_avatar_urls: Object;
    }

    interface IWordPressHttp{
	getAllPosts(): ng.IPromise<IPost[]>;
	getPost(id: number): ng.IPromise<IPost>;
	getComments(id: number): ng.IPromise<IComment[]>;
    }
}
