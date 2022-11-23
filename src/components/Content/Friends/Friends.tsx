import React from "react"
import {FriendType} from "../../../redux/friends-reducer"
import {Friend} from "./Friend"
import axios from 'axios';

type FriendsPropsType = {
    friendsData:Array<FriendType>,
    changeOnFollow(userId:string):void,
    changeOnUnfollow(userId:string):void,
    setUsers(users:Array<FriendType>):void,
}

export function Friends(props: FriendsPropsType) {

    if(props.friendsData.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            props.setUsers(res.data.items)
        })
    }

    function changeOnFollow(id:string):void {
        props.changeOnFollow(id)
    }

    function changeOnUnfollow(id:string):void {
        props.changeOnUnfollow(id)
    }

    return (
        <div>
            {props.friendsData.map((el) =>
                <Friend
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    photo={el.photos.small}
                    status={el.status}
                    followed={el.followed}
                    changeOnFollow={()=>{changeOnFollow(el.id)}}
                    changeOnUnfollow={() => {changeOnUnfollow(el.id)}}
                />
            )}
        </div>
    )
}