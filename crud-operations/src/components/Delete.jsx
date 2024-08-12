import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Delete() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function deletePost() {
    axios.delete(`${baseURL}/1`).then(() => {
      alert("Post deleted!");
      setPost(null);
    });
  }

  if (!post) return "No post!";

  return (
    <div>
      <h1> Title : {post.title} </h1>
      <p> userId : {post.userId} </p>
      <p> Id : {post.id} </p>
      <p> Body : {post.body} </p>
      <button onClick={deletePost}> Delete Post </button>
    </div>
  );
}
