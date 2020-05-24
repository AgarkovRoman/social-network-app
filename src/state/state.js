

let state = {
    profilePage: {
        PostsData: [
            {id: 1, postText: 'This is my post'},
            {id: 1, postText: 'I am learning React'},
        ],
    },
    dialogsPage: {
        DialogsData: [
            {id: 1, name: 'Katya Shilo'},
            {id: 2, name: 'Semen Agarkov'},
            {id: 3, name: 'Zhenya Ivanov'},
        ],
     MessegesData: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'How are you doing?'},
            {id: 3, message: 'Hi!'},
            {id: 4, message: 'I am good!'},
            {id: 5, message: 'I am good!'},
            {id: 5, message: 'I am xfdscd!'},
        ],
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        postText: postMessage,
    };

    state.profilePage.PostsData.push(newPost)
}

export default state;
