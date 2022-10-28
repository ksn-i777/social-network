const NEW_POST_TEXT = 'NEW-POST-TEXT';
const ADD_NEW_POST = 'ADD-NEW-POST';

export type ProfilePageType = {
    postsData: Array<PostType>,
    newPostText: string,
};
export type PostType = {
    id: number,
    message: string,
    likes: number,
};

let initialState:ProfilePageType = {
    postsData: [
        {id: 1, message: 'Yaaahhhooo', likes: 77},
        {id: 2, message: 'Happy birthday to me!', likes: 100},
        {id: 3, message: 'Have a good day!', likes: 60},
        {id: 4, message: 'How are you?', likes: 30},
        {id: 5, message: 'Hi. It is my first post', likes: 15},
    ],
    newPostText: '',
}

export function profileReducer (state = initialState, action: any) {
    if (action.type === NEW_POST_TEXT) {
        state.newPostText = action.newText;
        // вместо метода addPost
    } else if (action.type === ADD_NEW_POST) {
        let newPost = {
            id: 6,
            message: state.newPostText,
            likes: 0,
        }
        state.postsData.push(newPost);
        state.newPostText = '';
    }
    return state;
}
// колл-бэк, запускающий метод отслеживающий изменение текста поста в инпуте profilePage
export const actionNewPostText = (text: string | undefined) => {
    return {
        type: NEW_POST_TEXT,
        newText: text,
    }
}
// колл-бэк, запускающий метод добавления поста
export const actionAddNewPost = () => {
    return {
        type: ADD_NEW_POST,
    }
}
