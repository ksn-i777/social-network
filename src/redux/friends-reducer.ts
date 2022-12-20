import {UsersAPI} from '../api/api';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const CHANGE_PRELOADER_STATUS = 'CHANGE_PRELOADER_STATUS'
const TOGGLE_BUTTONS_DISABLED = 'TOGGLE_BUTTONS_DISABLED'

export type FriendType = {
    id: string
    name: string
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
};
export type FriendsPageType = {
    friendsData: Array<FriendType>,
    currentPage: number,
    pageSize: number,
    totalUsersCount: number,
    preloaderStatus: boolean,
    disabledButtons: Array<string>,
};

export type FollowActionType = {
    type: typeof FOLLOW,
    userId: string,
};
export type UnfollowActionType = {
    type: typeof UNFOLLOW,
    userId: string,
};
export type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<FriendType>,
};
export type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number,
};
export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number,
};
export type ChangePreloaderStatusActionType = {
    type: typeof CHANGE_PRELOADER_STATUS,
    newPreloaderStatus: boolean,
};
export type BeDisableButtonActionType = {
    type: typeof TOGGLE_BUTTONS_DISABLED,
    isDisabled: boolean,
    buttonID: string,
};

export type FriendsActionsType = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetTotalUsersCountActionType
    | SetCurrentPageActionType
    | ChangePreloaderStatusActionType
    | BeDisableButtonActionType

const initialState:FriendsPageType = {
    friendsData: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    preloaderStatus: false,
    disabledButtons: [],
};

export function friendsReducer(state:FriendsPageType = initialState, action:FriendsActionsType):FriendsPageType {

    switch (action.type) {
        case FOLLOW:
            return {...state, friendsData: state.friendsData.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case UNFOLLOW:
            return {...state, friendsData: state.friendsData.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case SET_USERS:
            return {...state, friendsData: action.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case CHANGE_PRELOADER_STATUS:
            return {...state, preloaderStatus: action.newPreloaderStatus}
        case TOGGLE_BUTTONS_DISABLED:
            return action.isDisabled ? {...state, disabledButtons: [...state.disabledButtons, action.buttonID]} : {...state, disabledButtons: state.disabledButtons.filter(el => el !== action.buttonID)}
        default:
            return state
    }
}
export function followAC(userId: string):FollowActionType {
    return {type: FOLLOW, userId}
}
export function unfollowAC(userId: string):UnfollowActionType {
    return {type: UNFOLLOW, userId}
}
export function setUsersAC(users: Array<FriendType>):SetUsersActionType {
    return {type: SET_USERS, users}
}
export function setTotalUsersCountAC(totalUsersCount: number):SetTotalUsersCountActionType {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}
export function setCurrentPageAC(currentPage: number):SetCurrentPageActionType {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export function changePreloaderStatusAC(newPreloaderStatus: boolean):ChangePreloaderStatusActionType {
    return {type: CHANGE_PRELOADER_STATUS, newPreloaderStatus}
}
export function toggleButtonsDisabledAC(isDisabled: boolean, buttonID: string):BeDisableButtonActionType {
    return {type: TOGGLE_BUTTONS_DISABLED, isDisabled, buttonID}
}

export const getUsersTC = (currentPage:number, pageSize:number) => (dispatch: (AC: FriendsActionsType) => void):void => {
    dispatch(changePreloaderStatusAC(true))
    UsersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(changePreloaderStatusAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))
    })
}

export const changeCurrentPageTC = (currentPageNumber: number) => (dispatch: (AC: FriendsActionsType) => void):void => {
    dispatch(changePreloaderStatusAC(true))
    dispatch(setCurrentPageAC(currentPageNumber))
    UsersAPI.getUsers(currentPageNumber, initialState.pageSize).then(data => {
        dispatch(changePreloaderStatusAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))
    })
}

export const createFollowTC = (userID: string) => (dispatch: (AC: FriendsActionsType) => void):void => {
    dispatch(toggleButtonsDisabledAC(true, userID))
    UsersAPI.createFollow(userID).then(data => {
        if(data.resultCode === 0) {dispatch(followAC(userID))}
        dispatch(toggleButtonsDisabledAC(false, userID))
    })
}

export const deleteFollowTC = (userID: string) => (dispatch: (AC: FriendsActionsType) => void):void => {
    dispatch(toggleButtonsDisabledAC(true, userID))
    UsersAPI.deleteFollow(userID).then(data => {
        if(data.resultCode === 0) {dispatch(unfollowAC(userID))}
        dispatch(toggleButtonsDisabledAC(false, userID))
    })
}