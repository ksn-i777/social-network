import React from "react";
import {FriendType} from "../../../redux/friends-reducer";
import {Friend} from "./Friend"

type FriendsPropsType = {
    friendsData:Array<FriendType>,
    changeOnFollow(userId:number):void,
    changeOnUnfollow(userId:number):void,
}

export function Friends(props: FriendsPropsType) {

    function changeOnFollow(id:number):void {
        props.changeOnFollow(id)
    }

    function changeOnUnfollow(id:number):void {
        props.changeOnUnfollow(id)
    }

    return (
        <div>
            {props.friendsData.map((el) =>
                <Friend
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    followed={el.followed}
                    status={el.status}
                    location={el.location}
                    photo={el.photo}
                    changeOnFollow={()=>{changeOnFollow(el.id)}}
                    changeOnUnfollow={() => {changeOnUnfollow(el.id)}}
                />
            )}
        </div>
    )
}