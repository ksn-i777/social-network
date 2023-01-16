import {v1} from 'uuid'
import {profileAPI} from '../api/api'

const ADD_NEW_POST = 'ADD-NEW-POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'


export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    }
    lookingForAJob: true
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type PostType = {
    id: string
    message: string
    likes: number
    ava: string
}
export type ProfilePageType = {
    profile: ProfileType
    postsData: Array<PostType>
    status: string
}

export type AddNewPostActionType = {
    type: typeof ADD_NEW_POST
    newPostText: string
}
export type SetProfileActionType = {
    type: typeof SET_PROFILE
    profile: any
}
export type SetProfileStatusActionType = {
    type: typeof SET_PROFILE_STATUS
    status: string
}
export type ProfileActionsType = AddNewPostActionType | SetProfileActionType | SetProfileStatusActionType

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
    status: '',
}

export function profileReducer(state:ProfilePageType = initialState, action:ProfileActionsType):ProfilePageType {

    switch (action.type) {
        case ADD_NEW_POST:
            const newPost:PostType = {
                id: v1(),
                message: action.newPostText,
                likes: 0,
                ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'
            }
            return {...state, postsData: [newPost, ...state.postsData]}
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case SET_PROFILE_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export function addNewPostAC(newPostText:string):AddNewPostActionType {
    return {type: ADD_NEW_POST, newPostText}
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