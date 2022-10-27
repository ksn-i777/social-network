import {ProfilePageType} from './store';

const NEW_POST_TEXT = 'NEW-POST-TEXT';
const ADD_NEW_POST = 'ADD-NEW-POST';

export function profileReducer (state: ProfilePageType, action: any) {
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
