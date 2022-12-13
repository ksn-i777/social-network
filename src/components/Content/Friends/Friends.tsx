import React from "react"
import {FriendType} from "../../../redux/friends-reducer"
import {Friend} from "./Friend"
import s from './Friends.module.css'
import {followAPI} from '../../../api/api';

type FriendsPropsType = {
    friendsData: Array<FriendType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    disabledButtons: Array<string>,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    changeCurrentPage: (currentPageNumber: number) => void,
    toggleButtonsDisabled: (disableStatus: boolean, buttonID: string) => void,
}

export function Friends(props: FriendsPropsType) {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const arrPages = []

    for (let i=1; i<=pagesCount; i++) {
        arrPages.push(i)
    }

    return (
        <div className={s.friends}>
            {props.friendsData.map((el) =>
                <Friend
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    photo={el.photos.small}
                    status={el.status}
                    disabledButtons={props.disabledButtons}
                    followed={el.followed}
                    createFollow={() => {
                        props.toggleButtonsDisabled(true, el.id)
                        followAPI.createFollow(el.id).then(data => {
                            if(data.resultCode === 0) {props.follow(el.id)}
                            props.toggleButtonsDisabled(false, el.id)
                        })
                    }}
                    deleteFollow={() => {
                        props.toggleButtonsDisabled(true, el.id)
                        followAPI.deleteFollow(el.id).then(data => {
                            if(data.resultCode === 0) {props.unfollow(el.id)}
                            props.toggleButtonsDisabled(false, el.id)
                        })
                    }}
                />
            )}
            <div className={s.pagesNumbersDiv}>
                {arrPages.map((page, index) => {
                    return (
                        <span
                            key={index}
                            className={props.currentPage === page ? s.currentPage : s.page}
                            onClick={() => props.changeCurrentPage(page)}>{page}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}