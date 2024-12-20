import Post from "./Post";
import classes from "./PostsList.module.css";

export default function PostsList(props) {
  return (
    <ul className={classes.posts}> 
      <Post author="Maximilian" body="I love React" />
        <Post author="Manu" body="I love Angular" />
    </ul>
  );
}