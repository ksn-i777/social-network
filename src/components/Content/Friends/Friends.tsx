import React from "react"
import {FriendType} from "../../../redux/friends-reducer"
import {Friend} from "./Friend"
import s from './Friends.module.css'

type FriendsPropsType = {
    friendsData: Array<FriendType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    changeOnFollow: (userId: string) => void,
    changeOnUnfollow: (userId: string) => void,
    changeCurrentPage: (currentPageNumber: number) => void,
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
                    followed={el.followed}
                    changeOnFollow={()=>{props.changeOnFollow(el.id)}}
                    changeOnUnfollow={() => {props.changeOnUnfollow(el.id)}}
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