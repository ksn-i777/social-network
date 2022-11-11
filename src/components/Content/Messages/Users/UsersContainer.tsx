import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";
import {UsersDataType} from '../../../../redux/messages-reducer';

function mapStateToProps(state:StateType):UsersDataType {
    return {
        usersData: state.messagesPage.usersData,
    }
}

export const UsersContainer = connect(mapStateToProps)(Users)