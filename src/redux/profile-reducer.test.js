import profileReducer, { addPostActionCreator, deletePostActionCreator } from './profile-reducer';
import React from 'react'

let state = {
    PostsData: [
        { id: 1, postText: 'This is my post' },
        { id: 2, postText: 'I am learning React' },
    ],
};

it('quantity of post should be incremented', () => {
    //1.готовим исходные данные 
    let action = addPostActionCreator('Poste text');

    //2. action
    let newState = profileReducer(state, action)

    //3.expectatioon of data
    expect(newState.PostsData.length).toBe(3)
})


it('text of post added correct', () => {
    let action = addPostActionCreator('Poste text');
    let newState = profileReducer(state, action)
    expect(newState.PostsData[2].postText).toBe('Poste text')
})

it('deleting success, length of post should decrement', () => {
    let action = deletePostActionCreator(1);
    let newState = profileReducer(state, action)
    expect(newState.PostsData.length).toBe(1)
})