import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
    return {
        usersData: state.messagesPage.usersData,
    }
}

export const UsersContainer = connect(mapStateToProps)(Users)