import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

export default function PostsList({isPosting, onStopPosting}) {
  const [enteredBody, setEnteredBody] = useState("");
  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const [enteredAuthor, setEnteredAuthor] = useState("");
  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };


  return (
    <>
      {isPosting && <Modal onClose={onStopPosting}><NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      /></Modal>}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manu" body="I love Angular" />
      </ul>
    </>
  );
}
