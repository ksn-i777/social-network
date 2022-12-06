import {v1} from 'uuid'

const NEW_POST_TEXT = 'NEW-POST-TEXT'
const ADD_NEW_POST = 'ADD-NEW-POST'
const SET_PROFILE = 'SET_PROFILE'


export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string,
    },
}
export type PostType = {
    id: string,
    message: string,
    likes: number,
    ava: string,
}
export type ProfilePageType = {
    profile: ProfileType,
    postsData: Array<PostType>,
    newPostText: string,
}

export type NewPostTextActionType = {
    type: typeof NEW_POST_TEXT,
    newPostText: string,
}
export type AddNewPostActionType = {
    type: typeof ADD_NEW_POST,
}
export type SetProfileActionType = {
    type: typeof SET_PROFILE,
    profile: any
}
export type ProfileActionsType = NewPostTextActionType | AddNewPostActionType | SetProfileActionType

const initialState:ProfilePageType = {
    profile: {
        aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque autem beatae blanditiis consequatur culpa dignissimos distinctio expedita inventore itaque, labore officiis porro possimus, quidem rerum similique sunt tempora vitae.',
        contacts: {
          facebook: '',
          website: null,
          vk: '',
          twitter: '',
          instagram: '',
          youtube: null,
          github: '',
          mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
          small: '',
          large: 'https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg'
        }
    },
    postsData: [
        {id: v1(), message: 'Yaaahhhooo', likes: 77, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
        {id: v1(), message: 'Happy birthday to me!', likes: 100, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
        {id: v1(), message: 'Have a good day!', likes: 60, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
        {id: v1(), message: 'How are you?', likes: 30, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
        {id: v1(), message: 'Hi. It is my first post', likes: 15, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
    ],
    newPostText: '',
}

export function profileReducer(state:ProfilePageType = initialState, action:ProfileActionsType):ProfilePageType {

    switch (action.type) {
        case NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText}
        case ADD_NEW_POST:
            const newPost:PostType = {
                id: v1(),
                message: state.newPostText,
                likes: 0,
                ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'
            }
            return {...state, postsData: [newPost, ...state.postsData], newPostText: ''}
        case SET_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export function newPostTextAC(newPostText:string):NewPostTextActionType {
    return {type: NEW_POST_TEXT, newPostText}
}
export function addNewPostAC():AddNewPostActionType {
    return {type: ADD_NEW_POST}
}
export function setProfileAC(profile:any):SetProfileActionType {
    return {type: SET_PROFILE, profile}
}