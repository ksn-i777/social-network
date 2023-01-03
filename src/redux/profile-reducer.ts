import {v1} from 'uuid'
import {profileAPI} from '../api/api';

const NEW_POST_TEXT = 'NEW-POST-TEXT'
const ADD_NEW_POST = 'ADD-NEW-POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'


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
    status: string,
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
export type SetProfileStatusActionType = {
    type: typeof SET_PROFILE_STATUS,
    status: string
}
export type ProfileActionsType = NewPostTextActionType | AddNewPostActionType | SetProfileActionType | SetProfileStatusActionType

const initialState:ProfilePageType = {
    profile: {
        aboutMe: '',
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
          large: ''
        },
    },
    postsData: [],
    newPostText: '',
    status: '',
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
        case SET_PROFILE_STATUS:
            return {...state, status: action.status}
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
export function setProfileAC(profile:ProfilePageType):SetProfileActionType {
    return {type: SET_PROFILE, profile}
}
export function setProfileStatusAC(status: string):SetProfileStatusActionType {
    return {type: SET_PROFILE_STATUS, status}
}

export const getProfileTC = (userID: number) => (dispatch: (AC: SetProfileActionType) => void):void => {
    profileAPI.getProfile(userID).then(res => dispatch(setProfileAC(res)))
}
export const getProfileStatusTC = (userID: number) => (dispatch: (AC: SetProfileStatusActionType) => void):void => {
    profileAPI.getProfileStatus(userID).then(res => {
        dispatch(setProfileStatusAC(res.data))
    })
}
export const updateProfileStatusTC = (status: string) => (dispatch: (AC: SetProfileStatusActionType) => void):void => {
    profileAPI.updateProfileStatus(status).then(res => {
        if(res.resultCode === 0) {dispatch(setProfileStatusAC(status))}
    })
}