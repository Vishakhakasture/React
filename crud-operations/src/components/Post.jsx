import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Post() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!";

  return (
    <div>
      <h1> Title : {post.title} </h1>
      <p> Body : {post.body} </p>
      <button onClick={createPost}> Create Post </button>
    </div>
  );
}
