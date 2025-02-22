import { UserType } from "./UserType";

export interface PostType {
    photo: string;
    _id: string;
    content: string;
    user: UserType;
    likes: number;
    comments_count: number;
    comments: [];
    createdAt: string;
}