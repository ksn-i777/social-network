import React from "react";
import {connect} from "react-redux";
import {OnlineFriends} from "./OnlineFriends";
import {StateType} from "../../../redux/redux-store";
import {NavbarType} from '../../../redux/navbar-reducer';

function mapStateToProps(state:StateType):NavbarType {
    return {
        onlineFriendsData: state.navbar.onlineFriendsData,
    }
}

export const OnlineFriendsContainer = connect(mapStateToProps)(OnlineFriends)