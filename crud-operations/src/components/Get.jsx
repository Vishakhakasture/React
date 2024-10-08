import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function Get() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1> Title : {post.title} </h1>
      <p> userId : {post.userId} </p>
      <p> Id : {post.id} </p>
      <p> Body : {post.body} </p>
    </div>
  );
}
