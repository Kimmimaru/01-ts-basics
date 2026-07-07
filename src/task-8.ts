// Task 8: HTTP requests with axios
import axios from 'axios';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}

fetchPosts().then(posts => {
  console.log(posts[0].title);
});
