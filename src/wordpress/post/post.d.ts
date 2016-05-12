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
}
