import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";
import { Link, Form, redirect } from "react-router-dom";

function NewPost({ onAddPost }) {
  // const [enteredBody, setEnteredBody] = useState("");
  // const bodyChangeHandler = (event) => {
  //   setEnteredBody(event.target.value);
  // };

  // const [enteredAuthor, setEnteredAuthor] = useState("");
  // const authorChangeHandler = (event) => {
  //   setEnteredAuthor(event.target.value);
  // };

  // function submitHandler(event) {
  //     event.preventDefault(); // this prevents the browser default of generating and sending an HTTP request
  //     const postData = {
  //         body: enteredBody,
  //         author: enteredAuthor
  //     };

  // }

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

//With react Form component it prevent the default behavior of the browser to generate and send an HTTP request.
//And with the Form being used React Router will make sure the action will be executed.
export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body: '...', author: '...' }
  const response = await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    return redirect('/');
  }
}
