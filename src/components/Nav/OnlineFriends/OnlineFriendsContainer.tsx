import React from "react"
import {connect} from "react-redux"
import {OnlineFriends} from "./OnlineFriends"
import {RootType} from "../../../store/store"
import {OnlineFriendType} from '../../../store/navbar-reducer'

type mapStateToPropsType = {
    onlineFriendsData:Array<OnlineFriendType>
}

function mapStateToProps(state:RootType):mapStateToPropsType {
    return {
        onlineFriendsData: state.navbar.onlineFriendsData,
    }
}

export const OnlineFriendsContainer = connect(mapStateToProps)(OnlineFriends)