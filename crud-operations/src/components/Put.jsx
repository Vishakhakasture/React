import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Put() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "New Hello World!",
        body: "This is an updated post.",
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
      <button onClick={updatePost}> Update Post </button>
    </div>
  );
}
