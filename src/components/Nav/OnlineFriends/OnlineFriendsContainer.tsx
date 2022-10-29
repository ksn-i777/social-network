import React from "react";
import {connect} from "react-redux";
import {OnlineFriends} from "./OnlineFriends";
import {StateType} from "../../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
    return {
        onlineFriendsData: state.navbar.onlineFriendsData,
    }
}

export const OnlineFriendsContainer = connect(mapStateToProps)(OnlineFriends)