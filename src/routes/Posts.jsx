import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";
import axios from "axios";
function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />;
      </main>
    </>
  );
}

export default Posts;

export async function loader(){
  const response = await axios.get("http://localhost:8080/posts");
  const resData = response.data;
  return resData.posts;
}