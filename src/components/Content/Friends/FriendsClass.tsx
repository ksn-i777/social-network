import React from "react"
import {Friend} from "./Friend"
import axios from 'axios';
import {FriendType} from '../../../redux/friends-reducer';

export class FriendsClass extends React.Component<any, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.friendsData.map((el:FriendType) =>
                    <Friend
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        photo={el.photos.small}
                        status={el.status}
                        followed={el.followed}
                        changeOnFollow={()=>{this.props.changeOnFollow(el.id)}}
                        changeOnUnfollow={() => {this.props.changeOnUnfollow(el.id)}}
                    />
                )}
            </div>
        )
    }
}