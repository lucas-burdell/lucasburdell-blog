import { Post as P1 } from "./1";

export interface IPost {
    title: string;
    date: string;
    post: React.ComponentType;
}

export const Posts = new Array<IPost>(P1);