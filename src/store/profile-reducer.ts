import { v1 } from 'uuid'
import { profileAPI } from '../api/api'
import { AppDispatchType } from './store'

//constants
const ADD_NEW_POST = 'PROFILE/ADD_NEW_POST'
const SET_PROFILE = 'PROFILE/SET_PROFILE'
const SET_PROFILE_STATUS = 'PROFILE/SET_PROFILE_STATUS'

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

//reducer
export function profileReducer(state:ProfilePageType = initialState, action:ProfileActionsType):ProfilePageType {
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost:PostType = {id: v1(), message: action.newPostText, likes: 0, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'}
            return {...state, postsData: [newPost, ...state.postsData]}
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case SET_PROFILE_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

//AC
export const addNewPostAC = (newPostText:string) => ({type: ADD_NEW_POST, newPostText} as const)
export const setProfileAC = (profile:ProfileType) => ({type: SET_PROFILE, profile} as const)
export const setProfileStatusAC = (status: string) => ({type: SET_PROFILE_STATUS, status} as const)

//TC
export const getProfileTC = (userID: number) => async (dispatch: AppDispatchType) => {
    const res = await profileAPI.getProfile(userID)
    dispatch(setProfileAC(res))
}
export const getProfileStatusTC = (userID: number) => async (dispatch: AppDispatchType) => {
    const res = await profileAPI.getProfileStatus(userID)
    dispatch(setProfileStatusAC(res.data))
}
export const updateProfileStatusTC = (status: string) => async (dispatch: AppDispatchType) => {
    const res = await profileAPI.updateProfileStatus(status)
    if(res.resultCode === 0) {dispatch(setProfileStatusAC(status))}
}

//types
export type ProfileType = {
    aboutMe: string
    contacts: {facebook: string, website: null, vk: string, twitter: string, instagram: string, youtube: null, github: string, mainLink: null}
    lookingForAJob: true
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {small: string, large: string}
}
export type PostType = {id: string, message: string, likes: number, ava: string}
export type ProfilePageType = {profile: ProfileType, postsData: Array<PostType>, status: string}

export type AddNewPostActionType = ReturnType<typeof addNewPostAC>
export type SetProfileActionType = ReturnType<typeof setProfileAC>
export type SetProfileStatusActionType = ReturnType<typeof setProfileStatusAC>
export type ProfileActionsType = AddNewPostActionType | SetProfileActionType | SetProfileStatusActionType