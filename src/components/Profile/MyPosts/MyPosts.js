import React from "react";
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengtCreator } from '../../../utils/validators'
import { InputType } from '../../UI/FormsControls/FormsControls'


const maxLengt200 = maxLengtCreator(200);

const MyPosts = (props) => {
    let PostsData = props.postdata;

    let Posts = PostsData.map(obj => {
        return (
            <Post message={obj.postText} />
        )
    });

    // let newPostElement = React.createRef()

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    // let onPostChange = () => {
    //     let postText = newPostElement.current.value;
    //     props.updateNewPostText(postText);
    // }

    return (
        <>
            <h3>My posts</h3>
            <AddPostreduxForm onSubmit={onAddPost} />
            {Posts}
        </>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={InputType}
                name='newPostText'
                placeholder='Write your post'
                validate={[required, maxLengt200]}
            >
                {/* // ref={newPostElement}
            // onChange={onPostChange}
            // value={props.newPostText}
            /> */}
            </Field>
            <div>
                <button
                // onClick={onAddPost}
                >Add post</button>
            </div>
        </form>
    )
}

const AddPostreduxForm = reduxForm({ form: 'addPostForm' })(AddPostForm)

export default MyPosts;
