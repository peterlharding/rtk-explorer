
// See - https://jsonplaceholder.typicode.com/comments

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const blankComment = {
  postId: 0,
  id: 0,
  name: '',
  email: '',
  body: ''
};

