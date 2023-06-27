export interface Author {
    userId: number;
    displayName: string;
    email: string;
    picture: string;
}

export interface Post {
    postId: number;
    created: string;
    liked: boolean;
    text: string;
    author: Author;
}