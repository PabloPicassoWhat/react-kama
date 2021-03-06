import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {
  let postsElement = props.posts.map( p => <Post key={p.id} message={p.message} likesCounts={p.likesCount}/>);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[required, maxLengthCreator(10)]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

const AddPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;