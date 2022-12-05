import React from "react"
import s from './Friends.module.css'
import {Friend} from "./Friend"
import axios from 'axios';
import {FriendType} from '../../../redux/friends-reducer';

export class FriendsClass extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }

    onChangeCurrentPage = (currentPageNumber: number) => {
        this.props.setCurrentPage(currentPageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
        console.log(`${this.props.currentPage}`)
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const arrPages = []

        for (let i=1; i<=pagesCount; i++) {
            arrPages.push(i)
        }

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
                <div className={s.pagesNumbersDiv}>
                    {arrPages.map((page, index) => {
                        return (
                            <span
                                key={index}
                                className={this.props.currentPage === page ? s.currentPage : s.page}
                                onClick={() => this.onChangeCurrentPage(page)}>{page}
                            </span>
                        )
                    })}
                </div>
            </div>
        )
    }
}