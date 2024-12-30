import Post from "./Post";
import classes from "./PostsList.module.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export default function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts yet.</h2>
          <p>Why not create one?</p>{" "}
        </div>
      )}
     
    </>
  );
}
