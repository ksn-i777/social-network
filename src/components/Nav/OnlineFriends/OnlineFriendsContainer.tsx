import React from "react";
import {connect} from "react-redux";
import {OnlineFriends} from "./OnlineFriends";
import {RootType} from "../../../redux/store";
import {OnlineFriendType} from '../../../redux/navbar-reducer';

type mapStateToPropsType = {
    onlineFriendsData:Array<OnlineFriendType>,
}

function mapStateToProps(state:RootType):mapStateToPropsType {
    return {
        onlineFriendsData: state.navbar.onlineFriendsData,
    }
}

export const OnlineFriendsContainer = connect(mapStateToProps)(OnlineFriends)